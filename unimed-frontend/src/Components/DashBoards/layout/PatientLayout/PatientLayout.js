import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { EditProfile } from "./EditProfile";
import { changeToggle } from "../../../../redux/actions";
import home from "../../../../assets/icons2/home-p.svg";
import SideClose from "../../../../assets/icons/left-arrow.svg";
import appointment from "../../../../assets/icons2/appointment.svg";
import Myrecords from "../../../../assets/icons2/Myrecords.svg";
import medcetificate from "../../../../assets/icons2/med-cetificate.svg";
import chat from "../../../../assets/icons2/office-discussion-chat-communication-goup-2-svgrepo-com.svg";
import Profile from "../../../../assets/profile-img.svg";
import logopath from "../../../../assets/logo-white.png";
import './styles.css';

export default function PatientLayout({ children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const open = useSelector((state) => state.setting.toggle);
  const [modalType, setModalType] = useState('view');
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [user, setUser] = useState(null);

  function toggleDrawer() {
    dispatch(changeToggle(!open));
  }

  const [profilePopupShow, setProfilePopupShow] = useState(false);

  const handleProfileClick = () => {
    setProfilePopupShow(!profilePopupShow);
  };

  const navigate = useNavigate();

  const handlePersonalDetailsClick = () => {
    navigate('/personal-details');
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={
            (!open ? ' col-xl-2' : ' w-100px') +
            (!show ? ' mobile-navbar-hide ' : ' mobile-show ') +
            ' col-auto col-md-1 px-0 side-bg-color border-right min-vh-100 trans'
          }
        >
          <div className="row">
            <div className="col">
              <img src={logopath} className={open ? 'hide-logo' : 'logo-prm'} />
            </div>
            <div className="col">
              <div
                className={'close-btn-container mobile-hide'}
                onClick={toggleDrawer}
              >
                <img
                  src={SideClose}
                  alt="SideClose"
                  className={!!open && 'rotate-180'}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 nav-link-text-color pt-4">
            <div className={'w-100 px-sm-2'}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'side-menu-item side-menu-active '
                    : 'side-menu-item '
                }
                to={'/PatientDashboard'}
              >
                <div className={'d-flex'}>
                  <img
                    src={home}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={'trans-1'}>Home</div>}
                </div>
              </NavLink>
            </div>

            <div className={'w-100 px-sm-2'}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'side-menu-item side-menu-active'
                    : 'side-menu-item'
                }
                to={'/Appointment'}
              >
                <div className={'d-flex'}>
                  <img
                    src={appointment}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={''}>Appointment</div>}
                </div>
              </NavLink>
            </div>
            <div className={'w-100 px-sm-2'}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'side-menu-item side-menu-active'
                    : 'side-menu-item'
                }
                to={'/Myrecords'}
              >
                <div className={'d-flex'}>
                  <img
                    src={Myrecords}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={''}>My Records</div>}
                </div>
              </NavLink>
            </div>
            <div className={'w-100 px-sm-2'}>
            <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'side-menu-item side-menu-active'
                    : 'side-menu-item'
                }
                to={'/members'}
              >
                <div className={'d-flex'}>
                  <img
                    src={chat}
                    alt="avatar"
                    height="24px"
                    width="26.4px"
                    className=" me-2"
                  />
                  {!open && <div className={''}>Community Chat</div>}
                </div>
              </NavLink>  
            </div>
            <div className={'w-100 px-sm-2 log-out-button-in-side-navbar'}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'side-menu-item side-menu-active'
                    : 'side-menu-item'
                }
                to={'/settings'}
              >
                <div className={'d-flex'}>
                  <FeatherIcon
                    icon="log-out"
                    className={!open ? 'me-2' : 'ms-1'}
                  />
                  {!open && <div className={''}>log-out</div>}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4">
            <div className="container-fluid nav-iconset flex-nowrap">
              <button
                className="navbar-toggler "
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="">
                <ul className="navbar-nav ms-auto align-items-center flex-row">
                  <button
                    type="button"
                    className={
                      'btn btn-secondary me-3 tasks-dropdown-btn padding-none d-flex align-items'
                    }
                    onClick={handlePersonalDetailsClick} // Navigate to PersonalDetails page
                  >
                    Personal Details
                  </button>
                  <Dropdown className="bg-white">
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      <div
                        className="d-flex align-items-center icon-hover rounded"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={Profile}
                          alt="avatar"
                          height="38px"
                          width="38px"
                          className="rounded-circle me-2"
                        />
                        <p className="mb-0 text-dark">{user?.username}</p>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="p-3 text-left">
                        <p>{user?.first_name}</p>
                        <p>{user?.email}</p>

                        <button
                          type="button"
                          className={
                            'btn btn-primary tasks-dropdown-btn padding-none d-flex align-items'
                          }
                          onClick={() => {
                            setModalType('Edit');
                            setModalShow(true);
                          }}
                        >
                          Profile Edit
                        </button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div />
            {children}
          </div>
        </div>
      </div>
      <EditProfile
        show={modalShow}
        type={modalType}
        onHide={() => {
          setModalShow(false);
        }}
        modelData={modalData}
      />
    </div>
  );
}
