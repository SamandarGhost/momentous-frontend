import { Box, Button, Container, Typography, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import Divider from "../divider";


interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    anchorEl: HTMLElement | null;
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    handleCloseLogout: () => void;
    handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
    const { cartItems, onAdd, onRemove, onDelete, onDeleteAll, setSignupOpen, setLoginOpen, anchorEl, handleLogoutClick, handleCloseLogout, handleLogoutRequest } = props;
    const { authMember } = useGlobals();

    /* HANDLAERS */



    return (
        <div className="home-navbar">
            <Container className="navbar-container">
                <Stack className={'top-bar'}>
                    <Stack className={'left-bar'}>
                        <Box className={'aureum'}>
                            Luxury
                        </Box>
                        <Box className={'store'}>
                            <NavLink to={'/'} className={'store'}>
                                Store
                            </NavLink>
                        </Box>
                        <Box className={'watch'}>
                            <NavLink to={'/watch/all'} className={'watch'}>
                                Watch
                            </NavLink>
                        </Box>
                        <Box className={'jewelry'}>
                            <NavLink to={'/jewelry/all'} className={'jewelry'}>
                                Jewelry
                            </NavLink>
                        </Box>
                        {authMember ? (
                            <Box className={'buy'}>
                                <NavLink to={'/my-orders'} className={'buy'}>
                                    Buy
                                </NavLink>
                            </Box>
                        ) : null}
                        <Box className={'help'}>
                            <NavLink to={'/help'} className={'help'}>
                                Help
                            </NavLink>
                        </Box>

                    </Stack>
                    <Stack className={'right-bar'}>
                        {authMember ? (
                            <><Box className={'like-save'}>
                                <NavLink to={'/like'} className={'like-link'}>
                                    <FavoriteBorderSharpIcon />
                                </NavLink>
                                <NavLink to={'/save'} className={'save-link'}>
                                    <BookmarkSharpIcon />
                                </NavLink>
                            </Box>
                                <Basket cartItems={cartItems}
                                    onAdd={onAdd}
                                    onRemove={onRemove}
                                    onDelete={onDelete}
                                    onDeleteAll={onDeleteAll} /></>
                        ) : null}

                        {!authMember ? (
                            <Box className={'signup-login'}>
                                <NavLink to={'/signup'} className={'signup-link'}>
                                    SignUp
                                </NavLink>
                                <Divider height="20" width="2" bg="#E3C08D" />
                                <NavLink to={'/login'} className={'login-link'}>
                                    Login
                                </NavLink>
                            </Box>
                        ) : (
                            <><Box className={'my'}>
                                <NavLink to={'/my-page'} className={'my-link'}>
                                    <img className="user-avatar"
                                        src={authMember?.memberImage ? `${serverApi}/${authMember.memberImage}` : "/icons/default-user.svg"}
                                        aria-haspaup={"true"} />
                                </NavLink>
                            </Box><Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={Boolean(anchorEl)}
                                onClose={handleCloseLogout}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                    <MenuItem onClick={handleLogoutRequest}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" style={{ color: 'blue' }} />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu></>
                        )}
                    </Stack>
                </Stack>
                <Stack className={'name-left'}>L u x u r y</Stack>
                <Stack className={'name-right'}>P a r a d i s e</Stack>
            </Container>
        </div>
    );
}