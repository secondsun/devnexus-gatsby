import SpeakersData from "./src/content/speakers.json"
import { GatsbyNode } from 'gatsby';
import path from "path"


export const createPages: GatsbyNode['createPages'] = async ({
    actions,
    graphql,
  }) => {
    const { createPage } = actions;
    console.log("Create Pages")
    console.log(actions)
    //Speakers
    SpeakersData.forEach(speaker => {
        createPage({
            path: `/speakers/${speaker.id}`,
            component: path.resolve("./src/templates/SpeakerTemplate.tsx"),
            context: {
                speaker: speaker
            }
        }) 
    })
  }