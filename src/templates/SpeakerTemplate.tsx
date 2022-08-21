import { Typography } from "@mui/material";
import React from "react"
import Layout from "../components/Layout"

type SpeakerTemplateProps = {
    speaker: any
}

export default function SpeakerTemplate(props : any) {
    console.log("Speaker Template")
    console.log(props)
    let speaker = props.pageContext.speaker
    return (
        <Layout>
            <div>{speaker.fullName}</div>
        </Layout>
    )
}