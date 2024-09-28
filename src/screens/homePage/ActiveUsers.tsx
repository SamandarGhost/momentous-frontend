import React from 'react';

import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from '@mui/joy';
import { createSelector } from '@reduxjs/toolkit';
import { retrieveTopUsers } from './selector';
import { useSelector } from 'react-redux';
import { serverApi } from '../../lib/config';
import { Member } from '../../lib/types/member';

/* REDUX SELECTOR */
const topUsersRetriever = createSelector(
    retrieveTopUsers,
    (topUsers) => ({topUsers})
);

export default function ActiveUsers() {
  const {topUsers} = useSelector(topUsersRetriever);

    return (
    <div className={"active-users-frame"}>
        <Container>
            <Stack className={"main"}>
                <Box className={"category-title"}>Active Users</Box>
                <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                        {topUsers.length !== 0 ? (
                            topUsers.map((member: Member) => {
                                const imagePath = `${serverApi}/${member.memberImage}`;
                                return (
                                    <Stack key={member._id} className={"card"}>
                                        <img src={imagePath} className={"image"} />
                                        <div className={"card-name"}>{member.memberNick}</div>
                                    </Stack>
                                );
                            }) ) : (<Box className={"no-data"}> No Active Users!</Box>)}
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>
    );
}