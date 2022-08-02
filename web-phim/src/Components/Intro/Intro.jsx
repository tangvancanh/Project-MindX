import React, { useState } from "react";
import ReactPlayer from "react-player";
import { GoUnmute, GoMute } from "react-icons/go";
import { SIntro } from "./StyleIntro";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <SIntro>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://www.youtube.com/watch?v=boYCQlAm7fs"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">Conan movie 25</h1>
        <p className="overviewIntro">The Bride of Halloween</p>
        <p className="overviewIntro">
          Nàng dâu Halloween là phim điện ảnh anime trinh thám năm 2022 của Nhật
          Bản dựa trên nguyên tác là bộ manga Thám tử lừng danh Conan của hoạ sĩ
          Aoyama Gōshō. Phim do Mitsunaka Susumu đạo diễn, dựa trên phần kịch
          bản do Okura Takahiro chấp bút.
        </p>
      </div>
      {isMuted ? (
        <GoMute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <GoUnmute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
    </SIntro>
  );
};

export default Intro;
