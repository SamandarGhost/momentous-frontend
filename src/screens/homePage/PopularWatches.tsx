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
import { retrieveNewDishes } from './selector';
import { useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import { serverApi } from '../../lib/config';
import { Product } from '../../lib/types/product';
import { ProductCollection } from '../../lib/enums/product.enum';

/* REDUX SELECTOR */
const newDishesRetriever = createSelector(
    retrieveNewDishes,
    (newDishes) => ({ newDishes })
);


export default function PopularWatches() {
    const { newDishes } = useSelector(newDishesRetriever);


    return (<div className={"popular-watch-frame"}>
        <Container>
            <Stack className={"trand-section"}>
                <Box className={"category-title"}>Popular Watches</Box>
                <Box className={"category-small"}>Each watch tells a story, rich with its own history and time</Box>
                <Stack className={"cards-frame"}>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/cartier.png" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Button className={'add-to'}>Add to Bag</Button>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 24, marginLeft: "10px" }}
                                />
                            </Typography>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'watch-name'}>Cartier Luxury Watch</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-func'}>Automatic</Typography>
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
                        <Box className={'buttons'}>
                            <Button className={'add-to'}>Add to Bag</Button>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 24, marginLeft: "10px" }}
                                />
                            </Typography>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'watch-name'}>Cartier Luxury Watch</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-func'}>Automatic</Typography>
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
                        <Box className={'buttons'}>
                            <Button className={'add-to'}>Add to Bag</Button>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 24, marginLeft: "10px" }}
                                />
                            </Typography>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'watch-name'}>Cartier Luxury Watch</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-func'}>Automatic</Typography>
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
                        <Box className={'buttons'}>
                            <Button className={'add-to'}>Add to Bag</Button>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 24, marginLeft: "10px" }}
                                />
                            </Typography>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'watch-name'}>Cartier Luxury Watch</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'watch-func'}>Automatic</Typography>
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