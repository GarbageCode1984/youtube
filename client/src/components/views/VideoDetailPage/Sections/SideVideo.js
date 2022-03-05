import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function SideVideo() {

    const [sideVideos, setsideVideos] = useState([])
    useEffect(() => {
        
            Axios.get('/api/video/getVideos')
            .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    setsideVideos(response.data.videos)
                } else {
                    alert('비디오 가져오기를 실패했습니다.')
                }
            })        
    }, [])
    

    const randeSizeVideo = sideVideos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60)
        var seconds = Math.floor(video.duration - minutes * 60)
       
       return <div key={index} style={{ display: "flex", marginBottom: "1rem", padding: "0 2rem"}}>
        <div style={{ width: "40%", marginRight: "1rem"}}>
            <a href={`/video/${video._id}`}  style={{ color:'gray' }}>  
                <img style={{ width:"100%", height:"100%"}} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
            </a>
        </div>

        <div style={{ width: "50%"}}>
            <a href={`/video/${video._id}`}  style={{ color:'gray' }}>
                <spen style={{ fontSize: '1rem', color:'black'}}>{video.title}</spen><br />
                <spen>{video.writer.name}</spen><br />
                <spen>{video.views} views </spen><br />
                <spen>{minutes} : {seconds}</spen><br />
            </a>
        </div>
    </div>
    })

    return (

        <React.Fragment>
            <div style={{ marginTop: "3rem"}} />
            {randeSizeVideo}
        </React.Fragment>


  )
}

export default SideVideo