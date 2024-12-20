import Tag from "../../reuseable-components/Tag";

const ProfileTags = ({ user }) => {
 
  const tags = Array.isArray(user?.tags) ? user.tags : [];

  return (
    <div className="w-[100%] min-h-[150px] flex flex-col rounded-lg bg-white mt-8 p-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-textPrimary">Tags</h3>
      </div>
      <div className="flex items-start justify-start flex-wrap mt-6 gap-3">
        {tags.length > 0 ? (
          tags.map((tag, index) => <Tag key={index} tag={tag} />)
        ) : (
          <p className="text-textSecondary">No tags available</p>
        )}
      </div>
    </div>
  );
};

export default ProfileTags;
