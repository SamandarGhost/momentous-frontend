import React from 'react';

import { Box, Button, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from "../../app/components/divider"
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import { serverApi } from '../../lib/config';
import { Product } from '../../lib/types/product';
import { ProductCollection } from '../../lib/enums/product.enum';
import { retrievePopularWatch } from './selector';
import { Watch } from '../../lib/types/watch';

/* REDUX SELECTOR */
const popularWatchRetriever = createSelector(
    retrievePopularWatch,
    (popularWatch) => ({ popularWatch })
);


export default function PopularWatches() {
    const { popularWatch } = useSelector(popularWatchRetriever);


    return (<div className={"popular-watch-frame"}>
        <Container>
            <Stack className={"trand-section"}>
                <Box className={"category-title"}>Popular Watches</Box>
                <Box className={"category-small"}>Each watch tells a story, rich with its own history and time</Box>
                <Stack className={"cards-frame"}>
                    {popularWatch.length !== 0 ? (
                        popularWatch.map((watch: Watch) => {
                            const imagePath = `${serverApi}/${watch.watchImages[0]}`;
                            return (
                                <Stack key={watch._id} className={'card'}>
                                    <Stack className={'card-img'}>
                                        <img src="/img/cartier.png" className={'img'} alt="" />
                                    </Stack>
                                    <Box className={'buttons'}>
                                        <Button className={'add-to'}>Add to Bag</Button>
                                        <Typography className={"views"}>{watch.watchViews}
                                            <VisibilityIcon
                                                sx={{ fontSize: 24, marginLeft: "10px" }}
                                            />
                                        </Typography>
                                    </Box>
                                    <Box className={'info-list'}>
                                        <Box className={'info'}>
                                            <Typography className={'watch-name'}>{watch.watchName}</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                        <Box className={'info'}>
                                            <Typography className={'watch-price'}>{watch.watchPrice}$</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                        <Box className={'info'}>
                                            <Typography className={'watch-func'}>{watch.watchFunc}</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                    </Box>
                                </Stack>
                            );
                        })) : (<Box className={"no-data"}>Popular Watches are not available!</Box>)}
                </Stack>
            </Stack>
        </Container>
    </div>);
}