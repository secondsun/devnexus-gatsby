import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CampaignIcon from '@mui/icons-material/Campaign';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DevNexusNavigationDrawer from '../components/DevNexusNavigationDrawer';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import GroupsIcon from '@mui/icons-material/Groups';
import BadgeIcon from '@mui/icons-material/Badge';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaidIcon from '@mui/icons-material/Paid';
import HealingIcon from '@mui/icons-material/Healing';
import ArchiveIcon from '@mui/icons-material/Archive';
import SourceIcon from '@mui/icons-material/Source';
export default function Index() {
  const theme = useTheme();

  const primaryNavigation = [
    {label:"Announcements",icon: <CampaignIcon />, route:""},
    {label:"Conference Info",icon: <BadgeIcon />, route:""},
    {label:"Speakers",icon: <GroupsIcon />, route:""},
    {label:"Schedule",icon: <EventNoteIcon />, route:""},
    {label:"Sponsors",icon: <PaidIcon />, route:""},
    {label:"Covid Policy",icon: <HealingIcon />, route:""}
  ]

  const secondaryNavigation = [
    {label:"CODE OF CONDUCT",icon: <GavelIcon />, route:""},
    {label:"PRIVACY POLICY",icon: <PolicyIcon />, route:""},
    {label:"ORGANIZERS",icon: <GroupsIcon />, route:""},
    {label:"PAST CONFERENCES",icon: <ArchiveIcon />, route:""},
    {label:"WE ARE OPEN-SOURCE",icon: <SourceIcon />, route:""}
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <DevNexusNavigationDrawer primaryNavigation={primaryNavigation} secondaryNavigation={secondaryNavigation} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    

    </Box>
    
  );
}
