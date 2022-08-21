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

type LayoutProps = {
    children?: React.ReactNode;
}

export default function Layout({ children } : LayoutProps ) {
  const theme = useTheme();

  const primaryNavigation = [
    {label:"Announcements",icon: <CampaignIcon />, route:"/"},
    {label:"Conference Info",icon: <BadgeIcon />, route:"/"},
    {label:"Speakers",icon: <GroupsIcon />, route:"/speakers"},
    {label:"Schedule",icon: <EventNoteIcon />, route:"/"},
    {label:"Sponsors",icon: <PaidIcon />, route:"/"},
    {label:"Covid Policy",icon: <HealingIcon />, route:"/"}
  ]

  const secondaryNavigation = [
    {label:"CODE OF CONDUCT",icon: <GavelIcon />, route:"/"},
    {label:"PRIVACY POLICY",icon: <PolicyIcon />, route:"/"},
    {label:"ORGANIZERS",icon: <GroupsIcon />, route:"/"},
    {label:"PAST CONFERENCES",icon: <ArchiveIcon />, route:"/"},
    {label:"WE ARE OPEN-SOURCE",icon: <SourceIcon />, route:"/"}
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <DevNexusNavigationDrawer primaryNavigation={primaryNavigation} secondaryNavigation={secondaryNavigation} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        {children}
      </Box>
    

    </Box>
    
  );
}
