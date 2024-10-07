import { useState } from "react";

import { createTheme, Grid2, ThemeProvider,  } from "@mui/material";

import AccountSelector from "./AccountSelector";
import InboxView from "./InboxView";
import DataProvider from "../../nonview/core/DataProvider";
import CustomAppBar from "./CustomAppBar";
import EventHandlerProvider from "../core/EventHandlerProvider";

const THEME= createTheme({
    typography: {
        fontFamily: "Cairo"
    }
});

export default function AllMailView() {
    const [activeEmailAccount, setActiveEmailAccount] = useState(null);
    
    return (
       
        <DataProvider state={{activeEmailAccount}}>
<EventHandlerProvider handlers={{setActiveEmailAccount}}>
             <ThemeProvider theme={THEME}>
        <CustomAppBar />
        <Grid2 container>
            <Grid2 size={{sx: 12, md: 6}}>
                <AccountSelector />
            </Grid2>
            <Grid2 size={{sx: 12, md: 6}}>
                <InboxView />
            </Grid2>
        </Grid2> </ThemeProvider>
        </EventHandlerProvider>
        </DataProvider>
       
    );
}