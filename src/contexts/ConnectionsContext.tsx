import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchUserConnection } from "../../utils/api";
import { useUser } from "./UserContext";

interface Connection {
  id: number;
  email: string;
  username: string;
  profileBackgroundImage: string;
  profileImage: string;
  bio: string;
  tags: string[];
  connections: number[];
  groups: number[];
  userEvents: number[];
  messages: number[];
  groupAdmin: number[];
  notifications: number[];
  showEvents: string;
  showConnections: string;
}

interface ConnectionContextType {
  connections: Connection[];
  setConnections: (connections: Connection[]) => void;
  filteredConnections: (filteredConnections: Connection[]) => void;
  getAllConnections: () => Promise<void>;
  loading: boolean;
  error: string | null;
  handleConnectionQuery: (value: string) => void;
}

interface ConnectionsProviderProps {
  children: ReactNode;
}

const ConnectionContext = createContext<ConnectionContextType | null>(null);

export const ConnectionsProvider: React.FC<ConnectionsProviderProps> = ({
  children,
}) => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [filteredConnections, setfilteredConnections] = useState<Connection[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUser();

  const getAllConnections = async () => {
    if (!user?.id) {
      setError("User is not defined.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const userConnections = await fetchUserConnection(user.id);
      setConnections(userConnections);
    } catch (err) {
      console.error("Error fetching connections:", err);
      setError("Failed to fetch connections.");
    } finally {
      setLoading(false);
    }
  };

  const handleConnectionQuery = (value: string) => {
    const filteredArr = connections?.filter((connection) =>
      connection.username.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredConnections(filteredArr);
  };

  useEffect(() => {
    setfilteredConnections(connections);
  }, [connections]);

  return (
    <ConnectionContext.Provider
      value={{
        connections,
        setConnections,
        getAllConnections,
        loading,
        error,
        filteredConnections,
        handleConnectionQuery,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnections = (): ConnectionContextType => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error("useConnections must be used within a ConnectionsProvider");
  }
  return context;
};