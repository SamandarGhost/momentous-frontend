import React from 'react';

import { Box, Container, Stack, Typography } from "@mui/material";
import { CssVarsProvider } from '@mui/joy';
import { createSelector } from '@reduxjs/toolkit';
import { retrieveTopUsers } from './selector';
import { useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { serverApi } from '../../lib/config';
import { Member } from '../../lib/types/member';

/* REDUX SELECTOR */
const topUsersRetriever = createSelector(
    retrieveTopUsers,
    (topUsers) => ({ topUsers })
);

export default function ActiveUsers() {
    const { topUsers } = useSelector(topUsersRetriever);
    return (<div className={"active-users"}>
        <Container>
            <Stack className={"trand-section"}>
                <Box className={"category-title"}>Our Active Users</Box>
                <Box className={"category-small"}>Here are our most active users</Box>
                <Stack className={"cards-frame"}>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/cartier.png" className={'img'} alt="" />
                        </Stack>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'user-name'}>Sam</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'user-location'}>South Korea</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/cartier.png" className={'img'} alt="" />
                        </Stack>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'user-name'}>Sam</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'user-location'}>South Korea</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/cartier.png" className={'img'} alt="" />
                        </Stack>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'user-name'}>Sam</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'user-location'}>South Korea</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/cartier.png" className={'img'} alt="" />
                        </Stack>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'user-name'}>Sam</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'user-location'}>South Korea</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </div>);
}