import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { COLORS } from "../../tailwind.config";

export const SinglePointLoad = ({ active, onClick }) => {
  return (
    <motion.button
      className="p-[0.7rem] rounded-lg inline-flex items-center justify-center"
      onClick={onClick}
      animate={{
        backgroundColor: active ? "#444" : "#fff", // bg-secondary / bg-primary
        // scale: active ? 1.1 : 1, // Slight scaling effect
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <motion.span
        className="flex w-[2.1rem] h-[2.1rem] justify-center items-center px-0 py-[0.40831rem]"
        initial={{ rotate: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="22"
          viewBox="0 0 7 22"
          fill="none"
        >
          <motion.path
            d="M3.17002 21.5967C3.35226 21.7789 3.64774 21.7789 3.82998 21.5967L6.79983 18.6268C6.98208 18.4446 6.98208 18.1491 6.79983 17.9668C6.61759 17.7846 6.32211 17.7846 6.13986 17.9668L3.5 20.6067L0.860135 17.9668C0.677891 17.7846 0.382414 17.7846 0.200169 17.9668C0.0179243 18.1491 0.0179243 18.4446 0.200169 18.6268L3.17002 21.5967ZM3.03333 0.733337L3.03333 21.2667H3.96667L3.96667 0.733337H3.03333Z"
            animate={{
              fill: active ? "#fff" : "#444", // Path color transitions
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.span>
    </motion.button>
  );
};

SinglePointLoad.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
export const UniformDistributedLoad = ({ active, onClick }) => {
  return (
    <motion.button
      className="p-[0.7rem] rounded-lg inline-flex items-center justify-center"
      onClick={onClick}
      animate={{
        backgroundColor: active ? "#444" : "#fff", // Change background color
        // scale: active ? 1.1 : 1, // Slight scaling effect
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="23"
        viewBox="0 0 30 23"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          // rotate: active ? 180 : 0, // Rotate when active
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.line
          x1="3.80017"
          y1="1.26667"
          x2="26.2002"
          y2="1.26667"
          stroke={active ? "#fff" : "#444"} // Stroke color transition
          strokeWidth="0.933333"
          animate={{
            strokeWidth: active ? 1.5 : 0.933333, // Animate stroke width
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M3.47019 22.5967C3.65243 22.7789 3.94791 22.7789 4.13015 22.5967L7.1 19.6268C7.28225 19.4446 7.28225 19.1491 7.1 18.9668C6.91776 18.7846 6.62228 18.7846 6.44004 18.9668L3.80017 21.6067L1.16031 18.9668C0.978061 18.7846 0.682585 18.7846 0.50034 18.9668C0.318095 19.1491 0.318095 19.4446 0.50034 19.6268L3.47019 22.5967ZM3.3335 1.73334L3.3335 22.2667H4.26684L4.26684 1.73334H3.3335Z"
          fill={active ? "#fff" : "#444"} // Fill color transition
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M14.6702 22.5967C14.8524 22.7789 15.1479 22.7789 15.3302 22.5967L18.3 19.6268C18.4823 19.4446 18.4823 19.1491 18.3 18.9668C18.1178 18.7846 17.8223 18.7846 17.64 18.9668L15.0002 21.6067L12.3603 18.9668C12.1781 18.7846 11.8826 18.7846 11.7004 18.9668C11.5181 19.1491 11.5181 19.4446 11.7004 19.6268L14.6702 22.5967ZM14.5335 1.73334L14.5335 22.2667H15.4668L15.4668 1.73334H14.5335Z"
          fill={active ? "#fff" : "#444"}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M25.8702 22.5967C26.0525 22.7789 26.3479 22.7789 26.5302 22.5967L29.5 19.6268C29.6823 19.4446 29.6823 19.1491 29.5 18.9668C29.3178 18.7846 29.0223 18.7846 28.8401 18.9668L26.2002 21.6067L23.5603 18.9668C23.3781 18.7846 23.0826 18.7846 22.9004 18.9668C22.7181 19.1491 22.7181 19.4446 22.9004 19.6268L25.8702 22.5967ZM25.7335 1.73334V22.2667H26.6669V1.73334H25.7335Z"
          fill={active ? "#fff" : "#444"}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

UniformDistributedLoad.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export const NonUniformDistributedLoad = ({ active, onClick }) => {
  return (
    <motion.button
      className="p-[0.7rem] rounded-lg inline-flex items-center justify-center"
      onClick={onClick}
      animate={{
        backgroundColor: active ? "#444" : "#fff", // Button background color
        // scale: active ? 1.1 : 1, // Scale button on activation
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        viewBox="0 0 30 22"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          // rotate: active ? 180 : 0, // Rotate SVG 180° when active
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.line
          x1="3.85314"
          y1="13.112"
          x2="26.5331"
          y2="0.512017"
          stroke={active ? "#fff" : "#444"} // Animate stroke color
          strokeWidth="0.933333"
          animate={{
            strokeWidth: active ? 1.5 : 0.933333, // Animate stroke width
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M3.74979 21.4099C3.93203 21.5921 4.22751 21.5921 4.40976 21.4099L7.3796 18.44C7.56185 18.2578 7.56185 17.9623 7.3796 17.78C7.19736 17.5978 6.90188 17.5978 6.71964 17.78L4.07977 20.4199L1.43991 17.78C1.25766 17.5978 0.962187 17.5978 0.779942 17.78C0.597698 17.9623 0.597698 18.2578 0.779942 18.44L3.74979 21.4099ZM3.61311 12.6799L3.61311 21.0799L4.54644 21.0799L4.54644 12.6799L3.61311 12.6799Z"
          fill={active ? "#fff" : "#444"} // Animate fill color
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M14.6698 21.4099C14.8521 21.5922 15.1476 21.5922 15.3298 21.4099L18.2996 18.4401C18.4819 18.2578 18.4819 17.9623 18.2996 17.7801C18.1174 17.5979 17.8219 17.5979 17.6397 17.7801L14.9998 20.42L12.36 17.7801C12.1777 17.5979 11.8822 17.5979 11.7 17.7801C11.5177 17.9623 11.5177 18.2578 11.7 18.4401L14.6698 21.4099ZM14.5332 6.79993L14.5332 21.0799L15.4665 21.0799L15.4665 6.79993L14.5332 6.79993Z"
          fill={active ? "#fff" : "#444"}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M25.8697 21.5966C26.0519 21.7788 26.3474 21.7788 26.5296 21.5966L29.4995 18.6267C29.6817 18.4445 29.6817 18.149 29.4995 17.9668C29.3172 17.7845 29.0218 17.7845 28.8395 17.9668L26.1996 20.6066L23.5598 17.9668C23.3775 17.7845 23.0821 17.7845 22.8998 17.9668C22.7176 18.149 22.7176 18.4445 22.8998 18.6267L25.8697 21.5966ZM25.733 0.733276V21.2666H26.6663V0.733276H25.733Z"
          fill={active ? "#fff" : "#444"}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

NonUniformDistributedLoad.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
