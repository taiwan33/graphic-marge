import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSllice";
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <>
      <div className="text-primary-blue rounded-xl bg-white p-3 font-bold shadow-xl">
        <button onClick={handleLogout} className="flex items-center gap-3">
          <p className="font-Calistoga text-lg">Logout</p>
          <div>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="red"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
