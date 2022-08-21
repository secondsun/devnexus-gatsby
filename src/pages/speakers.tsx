import { Typography } from "@mui/material";
import React from "react"
import Layout from "../components/Layout"
import Link from "../components/Link";
import speakers from "../content/speakers.json"

export default function Speakers() {
  return (
    <Layout>
        <div>
          <Typography paragraph>
            This is the Speakers Page
          </Typography>
          <Typography paragraph>
            <ul>
                {speakers.map(speaker =>  (<li><Link to={`/speakers/${speaker.id}`}>{speaker.fullName}</Link></li>))
                } 
            </ul>
          </Typography>
        </div>
    </Layout>

  );
}
