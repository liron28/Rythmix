import { ReactSVG } from "react-svg"
import Play from '../../../assets/imgs/play2.svg'
import dots from '../../../assets/imgs/dots.svg'

import { OptionsModal } from "../../OptionsModal"
import { useEffect, useRef, useState } from "react"
import { ToggleLikedStationButton } from "../../ToggleLikedStationButton"
import { stationService } from "../../../services/station.service"
import { useSelector } from "react-redux"
import { UserService } from "../../../services/user.service"
import { toggleLikedStation } from "../../../store/actions/user.action"
import { SongAndStationModal } from "../../modal/SongAndStationModal"

export function StationDetailsActions({ station, onPlayStation, is }) {

  const loggedInUser = useSelector((storeState) => storeState.userModule.user)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 })
  const [isLikedStation, setIsLikedStation] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    loadIsLikedStationState()
  }, [])

  function loadIsLikedStationState() {
    if (is !== 'liked-songs') {
      const isLiked = UserService.isStationLiked(loggedInUser, station)
      setIsLikedStation((prevState) => isLiked)
    }
  }

  // useEffect(() => {
  //   function updateButtonPosition() {
  //     const buttonRect = buttonRef.current.getBoundingClientRect()
  //     setButtonPosition({
  //       top: buttonRect.top + buttonRect.height,
  //       left: buttonRect.left
  //     })
  //   }
  //   updateButtonPosition()
  //   window.addEventListener('resize', updateButtonPosition)

  //   return () => {
  //     window.removeEventListener('resize', updateButtonPosition)
  //   }
  // }, [])
  useEffect(() => {
    const handleCloseModalMenu = () => setIsModalOpen(false)
    document.addEventListener('click', handleCloseModalMenu)
    return () => {
      document.removeEventListener('click', handleCloseModalMenu)
    }
  }, [])


  function handleOptionsClick(event) {
    event.stopPropagation()
    setIsModalOpen(true)
  }

  function onClose() {
    setIsModalOpen(false)
  }


  async function handleLikeStation() {
    toggleLikedStation(loggedInUser, station)
    setIsLikedStation((prevState) => !prevState)

  }

  return (
    <>
      <div className="station-details-actions-container">
        <div className="station-details-actions">
          {
            station.songs.length > 0 &&
            <div className="station-play-button-container">
              {/* TOASK : Why it only works with arrow function? Does it has anything to do with default argument */}
              <button onClick={() => onPlayStation()} className="station-play-button">
                <div className="play-svg-container">
                  <ReactSVG src={Play} />
                </div>
              </button>
            </div>
          }

          {!(is === 'liked-songs') && (station.createdBy._id !== loggedInUser?._id) &&
            <ToggleLikedStationButton isLikedStation={isLikedStation} handleLikeStation={handleLikeStation} />
          }

          <button ref={buttonRef} onClick={handleOptionsClick} className="more-actions">
            <ReactSVG src={dots} />
          </button>
          {isModalOpen && (
          <SongAndStationModal 
            modalType={'station'}
            onClose={onClose}
          />
        )}
          {/* {isModalOpen &&
            <OptionsModal modalType={'station'} station={station} isOpen={isModalOpen} onClose={onClose} buttonPosition={buttonPosition} />
          } */}
        </div>
      </div>
    </>
  )
}