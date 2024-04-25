import { IconButton, Box, CardContent, useTheme, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";

function Audio({ audio, name, type }) {
  const [play, setPlay] = useState(false);
  const theme = useTheme();
  const audioRef = useRef(null);

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 3;
    }
  };
  const handleReturn = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 3;
    }
  };
  const handleTogglePlay = () => {
    if (type == "video") {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlay(!play);
    } else {
      setPlay(!play);
    }
  };

  return (
    <MDBox mt={5} display="flex" justifyContent="center">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {type == "audio" && (
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography textAlign="center" component="div" variant="h5">
              {name}
            </Typography>
          </CardContent>
        )}
        {type == "video" && (
          <CardMedia controls ref={audioRef} component="video" height={240} src={audio} />
        )}
        <Box justifyContent="center" sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton onClick={handleReturn} aria-label="previous">
            {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          {!play ? (
            <IconButton onClick={handleTogglePlay} aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleTogglePlay} aria-label="play/pause">
              <PauseIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          )}
          <IconButton aria-label="next" onClick={handleForward}>
            {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
        {play && type == "audio" && (
          <audio
            autoPlay
            controls
            ref={audioRef}
            src={audio}
            onEnded={() => setPlay(false)}
            style={{ display: "none" }}
          />
        )}
      </Box>
    </MDBox>
  );
}

Audio.propTypes = {
  audio: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Audio;
