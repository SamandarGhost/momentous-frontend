import React from 'react';

import { Box, Button, Container, Stack } from "@mui/material";
import { AspectRatio, CssVarsProvider } from "@mui/joy";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import { createSelector } from '@reduxjs/toolkit';
import { Product } from '../../lib/types/product';
import { retrievePopularDishes } from './selector';
import { useSelector } from 'react-redux';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import CheckIcon from '@mui/icons-material/Check';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import { serverApi } from '../../lib/config';
import { Margin } from '@mui/icons-material';

/* REDUX SELECTOR */
const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({ popularDishes })
);


export default function TrendJewelries() {
    const { popularDishes } = useSelector(popularDishesRetriever);


    return (<div className={"trend-jewelry-frame"}>
        <Container>
            <Stack className={"trand-section"}>
                <Box className={"category-title"}>Trend Jewelries</Box>
                <Box className={"category-small"}>Most likely and popular jewelries</Box>
                <Stack className={"cards-frame"}>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/earings.webp" className={'img'} alt="" />
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
                                <Typography className={'jewelry-name'}>Earing</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-material'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/earings.webp" className={'img'} alt="" />
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
                                <Typography className={'jewelry-name'}>Earing</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-material'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/earings.webp" className={'img'} alt="" />
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
                                <Typography className={'jewelry-name'}>Earing</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-material'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/earings.webp" className={'img'} alt="" />
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
                                <Typography className={'jewelry-name'}>Earing</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-price'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry-material'}>Gold</Typography>
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