function UserProfile({ name, title, imageUrl, description }) {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
        <img className="rounded-full w-36 h-36 mx-auto" src={imageUrl} alt="User" />
        <h1 className="text-xl text-blue-800 my-4">{name}</h1>
        <p className="text-gray-600 text-base">{title}</p>
        <p className="text-gray-600 text-base">
          {description ? description : "No description available."}
        </p>
      </div>
    );
  }
  
  UserProfile.defaultProps = {
    name: "John Doe",
    title: "Developer at Example Co.",
    imageUrl: "https://via.placeholder.com/150",
    description: "Loves to write code and explore new technologies.",
  };
  
  export default UserProfile;