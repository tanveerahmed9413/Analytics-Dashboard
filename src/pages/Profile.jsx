import React, { use } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import tanveerImage from "../assets/Tanveer_Image.png"

const Profile = () => {
  const user = {
    name: "Tanveer Ahmed",
    username: "@tanveer.ahmed.9413",
    bio: "Frontend Developer | React Enthusiast | Learning Generative AI | MERN Stack Developer",
    avatar:
      {tanveerImage},
    location: "Alwar, Rajasthan",
  };


  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      link: "https://instagram.com/tanveer.ahmed.9413",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      link: "https://linkedin.com/in/tanveerahmed9413",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      link: "https://github.com/tanveerahmed9413",
      color: "from-gray-700 to-black",
    },
  ];

  const stats = [
    {
      value: "400+",
      label: "Followers",
    },
    {
      value: "35+",
      label: "Following",
    },
    {
      value: "5+",
      label: "Projects",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 p-3 sm:p-6">
      {/* Gradient Border */}
      <div className="w-full max-w-5xl rounded-3xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
        {/* Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center">
            <img
              src={user.avatar.tanveerImage}
              alt={user.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              {user.name}
            </h1>

            <p className="mt-1 text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              {user.username}
            </p>

            <p className="mt-4 text-sm sm:text-base text-center max-w-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent px-2">
              {user.bio}
            </p>

            <div className="flex items-center gap-2 mt-4 text-gray-300 text-sm sm:text-base">
              <FaMapMarkerAlt />
              <span>{user.location}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {item.value}
                </h2>
                <p className="text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className="mt-12">
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect With Me
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${social.color} text-white`}
                  >
                    {social.icon}
                  </div>

                  <h3 className="text-white text-xl font-semibold mt-4">
                    {social.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Follow me on {social.name}
                  </p>

                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-5 inline-flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r ${social.color} text-white font-semibold hover:scale-105 transition-all duration-300`}
                  >
                    Follow
                  </a>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Profile;