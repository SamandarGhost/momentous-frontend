import { Box, Button, Container, Stack, Typography } from "@mui/material";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function Like() {
    return (<div className={'like'}>
        <Container className={'like-cnt'}>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack className={'like-crd'}>
                <Box className={'img-crd'}>
                    <img src="/img/bracelets.webp" className={'img'} alt="" />
                </Box>
                <Box className={'info-box'}>
                    <Box className={'view-btns'}>
                        <Box className={'main'}>
                            <Typography className={"views"}>20
                                <VisibilityIcon
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                            <Typography className={"views"}>20
                                <FavoriteOutlinedIcon className={'like'}
                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                />
                            </Typography>
                        </Box>
                        <BookmarkBorderOutlinedIcon className={'book-mark'} />
                    </Box>
                    <Box className={'info'}>
                        <Typography className={'name'}>Bracelets</Typography>
                        <Typography className={'gender'}>Woman</Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    </div>
    )
}