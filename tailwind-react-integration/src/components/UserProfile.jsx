function UserProfile({ name, title, imageUrl, description }) {
    return (
      <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
          src={imageUrl} 
          alt="User" 
        />
        <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">{name}</h1>
        <p className="text-sm md:text-base text-gray-600">{title}</p>
        <p className="text-sm md:text-base text-gray-600">
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