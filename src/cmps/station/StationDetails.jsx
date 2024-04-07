import { useEffect, useState } from "react"
import { useParams } from "react-router"

import { StationDetailsHeader } from "./StationDetailsHeader"
import { StationDetailsActions } from "./StationDetialsActions"
import { PlaylistSongList } from "./PlaylistSongList"
import { AlbumSongList } from "./AlbumSongList"

import { stationService } from "../../services/station.service"



export function StationDetails() {
    
    const [station, setStation] = useState()
    const params = useParams()

    useEffect(() => {
        loadStation()
    },[])

    async function loadStation(){
        try{
            const station = await stationService.getById(params.stationId)
            setStation(station)
        }catch (err) {
            console.log(err);
        }
    }


    if(!station) return <></>
    return (
        <>
            <section className="station-details page">
                
                <StationDetailsHeader station={station} />
                <StationDetailsActions station={station} />
                <div className="song-list-container">
                    {station.type === 'playlist' ? <PlaylistSongList songs={station.songs} /> : <AlbumSongList songs={station.songs}/> }
                </div>
            </section>
        </>
    )
    
}
