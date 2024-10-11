import { Box, Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../app/hooks/useGlobals";
import "../../css/userPage.css";
import { MemberType } from "../../lib/enums/member.enum";
import { serverApi } from "../../lib/config";
import Divider from "../../app/components/divider";

export default function UserPage() {
  const { authMember } = useGlobals();

  return (
    <div className={"user-page"}>
      <Container className={"container"}>
        <Typography className={'title'}>My Page:</Typography>
        <Stack className={"my-frame"}>
          <Stack className={"my-right"}>
            <Stack className={'right'}>
              <Box className={'user-img'}>
                <img src="/icons/default-user.svg" className={'img'} alt="" />
                <Box className={'media'}>
                  <FacebookIcon className={'media-icn'} />
                  <InstagramIcon className={'media-icn'} />
                  <TelegramIcon className={'media-icn'} />
                  <YouTubeIcon className={'media-icn'} />
                </Box>
              </Box>
              <Divider height="2" width="300" bg="black" />
              <Box className={'info'}>
                <Typography className={'name'}>Samandar</Typography>
                <Divider height="1" width="300" bg="black" />
                <Typography className={'two'}>Phone: 010 4867 5455</Typography>
                <Divider height="1" width="300" bg="black" />
                <Typography className={'two'}>Location: South Korea</Typography>
                <Divider height="1" width="300" bg="black" />
                <Typography className={'two'}>Email: hurayrah@gmail.com</Typography>
                <Divider height="1" width="300" bg="black" />
                <Box className={'desc'}>
                  <Typography className={'descr'}>Description:</Typography>
                  <Divider height="1" width="300" bg="black" />
                  <Typography className={'context'}>Web Developer. Student of Unversity</Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
          <Stack className={"my-left"}>
            <Box className={"menu-content"}>
              <Settings />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
