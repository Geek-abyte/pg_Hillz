import { useState, useRef, useEffect } from "react";

import birthdayNote from "../assets/main_page_assets/01_birthday_note.png";
import smallNote from "../assets/main_page_assets/02_small_note.png";
import sunsetPolaroid from "../assets/main_page_assets/03_sunset_polaroid.png";
import butterfly from "../assets/main_page_assets/04_butterfly.png";
import gratefulText from "../assets/main_page_assets/05_grateful_text.png";
import flower from "../assets/main_page_assets/06_flower.png";
import yellowHeart from "../assets/main_page_assets/07_yellow_heart.png";
import blueStar from "../assets/main_page_assets/08_blue_star.png";
import smiley from "../assets/main_page_assets/09_smiley.png";
import mainPolaroid from "../assets/main_page_assets/12_main_polaroid.png";

/* ── Page 2 assets ───────────────────────────────────────── */
import p2Bg from "../assets/page2/00_background_reconstructed.jpg";
import p2TopNote from "../assets/page2/01_top_yellow_note.png";
import p2BottomNote from "../assets/page2/02_bottom_lined_note.png";
import p2Smiley from "../assets/page2/03_smiley_sticker.png";
import p2Daisy from "../assets/page2/04_daisy_sticker.png";
import p2PurpleFlower from "../assets/page2/05_purple_flower_sticker.png";
import p2PinkHeart from "../assets/page2/06_pink_heart_sticker.png";
import p2YellowStar from "../assets/page2/07_yellow_star_sticker.png";
import p2TapeRight from "../assets/page2/09_right_gingham_tape.png";
import p2TapeBottomL from "../assets/page2/10_bottom_left_gingham_tape.png";
import p2GreenTape from "../assets/page2/11_green_note_tape.png";
import p2PurpleTape from "../assets/page2/12_purple_photo_tape.png";
import p2Strawberry from "../assets/page2/14_strawberry_sticker.png";
import p2HeartsTop from "../assets/page2/15_upper_two_hearts_doodles.png";
import p2StarDoodleTop from "../assets/page2/16_upper_purple_star_doodle.png";
import p2HeartDoodleL from "../assets/page2/17_lower_left_purple_heart_doodle.png";
import p2StarDoodleLow from "../assets/page2/18_lower_purple_star_doodle.png";
import p2PolaroidFrame from "../assets/page2/20_polaroid_frame_cutout.png";
import p2Photo from "../assets/page2/noname.png";
import p2Video from "../assets/page2/WhatsApp Video 2026-09-27 at 09.53.11.mp4";
import p2Ribbon from "../assets/page3/08_gold_bow.png";
import p2BottomSheet from "../assets/page2/21_bottom_yellow_paper_sheet.png";
import PoetryModal, { type NoteMessage } from "../components/PoetryModal";

/* ── Page 3 assets ───────────────────────────────────────── */
import p3Bg from "../assets/page3/00_background_black_paper.jpeg";
import p3SageBg from "../assets/page3_bg_sage.jpg";
import p3NewsTop from "../assets/page3/01_top_left_newspaper.png";
import p3NewsBot from "../assets/page3/02_bottom_right_newspaper.png";
import p3BluePaint from "../assets/page3/03_blue_paint_stroke.png";
import p3EnjoyLife from "../assets/page3/04_enjoy_life_lettering.png";
import p3Hearts from "../assets/page3/05_upper_heart_doodles.png";
import p3PinkFlower from "../assets/page3/06_upper_pink_flower_doodle.png";
import p3Strawberry from "../assets/page3/07_strawberry_sticker.png";
import p3Bow from "../assets/page3/08_gold_bow.png";
import p3Rose from "../assets/page3/09_rose_sticker.png";
import p3BdayText from "../assets/page3/14_birthday_lettering.png";
import p3LinesLeft from "../assets/page3/17_lower_left_birthday_lines.png";
import p3StarRight from "../assets/page3/18_lower_right_small_star.png";
import p3LinesRight from "../assets/page3/19_lower_right_small_lines.png";
import p3Bunny from "../assets/page3/16_bunny_sticker.png";
import p3Photo from "../assets/page3/noname.png";
import sophie1 from "../assets/sophia/sophie1.png";
import sophie2 from "../assets/sophia/sophie2.png";
import sophie3 from "../assets/sophia/sophie3.png";
import praise1 from "../assets/el-praise/praise1.png";
import praise2 from "../assets/el-praise/priase2.png";
import melody1 from "../assets/melody/melody1.png";
import melody2 from "../assets/melody/melody2.png";
import elPraiseNote from "../assets/el-praise/note.png";

/* ── Page 4 assets ───────────────────────────────────────── */
import tonyPhoto from "../assets/tony/tony.png";
import tlhPhoto from "../assets/TLH.png";
import mabel1 from "../assets/mabel/mabel1.png";
import mabel2 from "../assets/mabel/mabel2.png";
import mabel3 from "../assets/mabel/mabel3.png";
import p4Bg from "../assets/page4/00_background_reconstructed.jpeg";
import p4QuotePaper from "../assets/page4/02_quote_paper.png";
import p4LinedNote from "../assets/page4/06_right_lined_note.png";
import p4LeftFlower from "../assets/page4/09_left_flower.png";
import p4LowerFlower from "../assets/page4/10_lower_flower.png";
import p4OrangeTape from "../assets/page4/11_orange_tape.png";
import p4BdayLettering from "../assets/page4/12_birthday_girl_lettering.png";
import p4BottomMessage from "../assets/page4/13_bottom_message.png";
import p4LowerLeftTape from "../assets/page4/16_lower_left_tape.png";

/* ── Page 5 assets ───────────────────────────────────────── */
import p5Bg from "../assets/page5/00_background_reconstructed.jpeg";
import p5GoodFriendsNote from "../assets/page5/01_good_friends_paper_note.png";
import p5TopTape from "../assets/page5/02_top_tape.png";
import p5CameraSticker from "../assets/page5/03_camera_sticker.png";
import p5Sunflower from "../assets/page5/04_sunflower_sticker.png";
import divinePhoto from "../assets/page5/divine.png";
import p5StripTape from "../assets/page5/08_right_strip_tape.png";
import p5FlowerBundle from "../assets/page5/09_dried_flower_bundle.png";
import p5Butterfly from "../assets/page5/11_butterfly_sticker.png";
import p5SmallNote from "../assets/page5/12_small_note.png";
import p5GreenTape from "../assets/page5/13_green_gingham_tape.png";
import p5LeftHeart from "../assets/page5/14_left_heart_doodle.png";
import p5RightHeart from "../assets/page5/15_right_heart_doodle.png";
import p5AccentLines from "../assets/page5/16_lower_left_accent_lines.png";

/* ── Page 6 assets ───────────────────────────────────────── */
import p6Bg from "../assets/page6/01_background.jpeg";
import p6Badge from "../assets/page6/02_badge.png";
import p6Note from "../assets/page6/03_handwritten_note.png";
import p6Polaroid from "../assets/page6/04_main_polaroid_photo.png";
import p6CamoCorner from "../assets/page6/05_camoflage_collage.png";
import p6Binoculars from "../assets/page6/06_binocculers.png";
import gbemiMain from "../assets/gbemi/gbemi-main.png";
import gbemiGallery from "../assets/gbemi/gallery.png";
import gbemiPhoto1 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.34 (1).jpeg";
import gbemiPhoto2 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35 (1).jpeg";
import gbemiPhoto3 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35 (2).jpeg";
import gbemiPhoto4 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35.jpeg";
import gbemiPhoto5 from "../assets/gbemi/WhatsApp Image 2026-10-01 at 08.26.39.jpeg";
import gbemiPhoto6 from "../assets/gbemi/WhatsApp Image 2026-10-01 at 08.26.40.jpeg";
import BentoGalleryModal from "../components/BentoGalleryModal";
import bgSong from "../assets/music/song.mp3";

export const GBEMI_GALLERY_IMAGES = [
  gbemiPhoto1,
  gbemiPhoto2,
  gbemiPhoto3,
  gbemiPhoto4,
  gbemiPhoto5,
  gbemiPhoto6,
];

// All images and visual assets across all scrapbook pages to preload & bake in memory
const ALL_SCRAPBOOK_MEDIA: string[] = [
  // Page 1 (Cover)
  birthdayNote,
  smallNote,
  sunsetPolaroid,
  butterfly,
  gratefulText,
  flower,
  yellowHeart,
  blueStar,
  smiley,
  mainPolaroid,
  // Page 2
  p2Bg,
  p2TopNote,
  p2BottomNote,
  p2Smiley,
  p2Daisy,
  p2PurpleFlower,
  p2PinkHeart,
  p2YellowStar,
  p2TapeRight,
  p2TapeBottomL,
  p2GreenTape,
  p2PurpleTape,
  p2Strawberry,
  p2HeartsTop,
  p2StarDoodleTop,
  p2HeartDoodleL,
  p2StarDoodleLow,
  p2PolaroidFrame,
  p2Photo,
  p2Ribbon,
  p2BottomSheet,
  // Page 3
  p3Bg,
  p3SageBg,
  p3NewsTop,
  p3NewsBot,
  p3BluePaint,
  p3EnjoyLife,
  p3Hearts,
  p3PinkFlower,
  p3Strawberry,
  p3Bow,
  p3Rose,
  p3BdayText,
  p3LinesLeft,
  p3StarRight,
  p3LinesRight,
  p3Bunny,
  p3Photo,
  sophie1,
  sophie2,
  sophie3,
  praise1,
  praise2,
  melody1,
  melody2,
  elPraiseNote,
  // Page 4
  tonyPhoto,
  tlhPhoto,
  mabel1,
  mabel2,
  mabel3,
  p4Bg,
  p4QuotePaper,
  p4LinedNote,
  p4LeftFlower,
  p4LowerFlower,
  p4OrangeTape,
  p4BdayLettering,
  p4BottomMessage,
  p4LowerLeftTape,
  // Page 5
  p5Bg,
  p5GoodFriendsNote,
  p5TopTape,
  p5CameraSticker,
  p5Sunflower,
  divinePhoto,
  p5StripTape,
  p5FlowerBundle,
  p5Butterfly,
  p5SmallNote,
  p5GreenTape,
  p5LeftHeart,
  p5RightHeart,
  p5AccentLines,
  // Page 6
  p6Bg,
  p6Badge,
  p6Note,
  p6Polaroid,
  p6CamoCorner,
  p6Binoculars,
  gbemiMain,
  gbemiGallery,
  ...GBEMI_GALLERY_IMAGES,
];

import {
  PAGE_2_NOTE,
  PAGE_7_NOTE,
  PAGE_3_NOTE,
  PAGE_4_NOTE,
  PAGE_6_NOTE,
  PAGE_7_ELPRAISE_NOTE,
  PAGE_11_NOTE,
  PAGE_8_MELODY_NOTE,
  PAGE_9_NOTE,
  PAGE_10_NOTE_1,
  PAGE_10_NOTE_2,
} from "../data/scrapbookNotes";

export {
  PAGE_2_NOTE,
  PAGE_7_NOTE,
  PAGE_3_NOTE,
  PAGE_4_NOTE,
  PAGE_6_NOTE,
  PAGE_7_ELPRAISE_NOTE,
  PAGE_11_NOTE,
  PAGE_8_MELODY_NOTE,
  PAGE_9_NOTE,
  PAGE_10_NOTE_1,
  PAGE_10_NOTE_2,
};

type PageRenderFn = (
  onOpenNote: (note: NoteMessage) => void,
  onOpenGallery?: () => void
) => React.ReactNode;

interface ScrapbookPageDef {
  id: number;
  bg: string;
  render: PageRenderFn;
}

/* ── Scrapbook page definitions ──────────────────────────── */
const PAGES: ScrapbookPageDef[] = [
  {
    id: 1,
    bg: "#2d4a35",
    render: () => (
      <div className="sb-page sb-page--cover">
        <img src={birthdayNote} className="sb-el sb-cover__title" alt="Happy Birthday Hillary" draggable={false} />
        <img src={sunsetPolaroid} className="sb-el sb-cover__sunset" alt="Sunset" draggable={false} />
        <img src={butterfly} className="sb-el sb-cover__butterfly" alt="" draggable={false} />
        <img src={mainPolaroid} className="sb-el sb-cover__main" alt="Hillary" draggable={false} />
        <img src={smallNote} className="sb-el sb-cover__note" alt="Same girl, bigger dreams" draggable={false} />
        <img src={gratefulText} className="sb-el sb-cover__grateful" alt="Grateful for you, always" draggable={false} />
        <img src={flower} className="sb-el sb-cover__flower" alt="" draggable={false} />
        <img src={blueStar} className="sb-el sb-cover__star" alt="" draggable={false} />
        <img src={smiley} className="sb-el sb-cover__smiley" alt="" draggable={false} />
        <img src={yellowHeart} className="sb-el sb-cover__heart" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 2,
    bg: "#c9b4e0",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--two">
        {/* ── Background ── */}
        <img src={p2Bg} className="sb-el sb-p2__bg" alt="" draggable={false} />

        {/* ── Bottom yellow sheet (behind everything) ── */}
        <img src={p2BottomSheet} className="sb-el sb-p2__bottom-sheet" alt="" draggable={false} />

        {/* ── Washi / gingham tapes ── */}
        <img src={p2TapeRight} className="sb-el sb-p2__tape-r" alt="" draggable={false} />
        <img src={p2TapeBottomL} className="sb-el sb-p2__tape-bl" alt="" draggable={false} />
        <img src={p2GreenTape} className="sb-el sb-p2__tape-green" alt="" draggable={false} />
        <img src={p2PurpleTape} className="sb-el sb-p2__tape-purple" alt="" draggable={false} />

        {/* ── Top yellow note ── */}
        <img src={p2TopNote} className="sb-el sb-p2__top-note" alt="the little moments" draggable={false} />

        {/* ── Polaroid (video/photo behind frame, ribbon on top-left corner) ── */}
        <div className="sb-el sb-p2__polaroid-wrap">
          {/* Frame first — in-flow, determines the wrap's height */}
          <img
            src={p2PolaroidFrame}
            className="sb-p2__polaroid-frame"
            alt=""
            draggable={false}
          />
          {/* Video plays behind the frame cutout window */}
          <video
            src={p2Video}
            poster={p2Photo}
            className="sb-p2__video"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Ribbon on top-left corner of the image */}
          <img
            src={p2Ribbon}
            className="sb-p2__ribbon"
            alt="Gold ribbon"
            draggable={false}
          />
        </div>

        {/* ── Active Bottom lined note (Click to open poetry modal) ── */}
        <div
          className="sb-el sb-p2__bottom-note-wrap"
          onClick={() => onOpenNote(PAGE_2_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Rejoice"
        >
          <img
            src={p2BottomNote}
            className="sb-p2__bottom-note-img sb-active-note"
            alt="good friends, silly moments, big dreams, always"
            draggable={false}
          />
        </div>


        {/* ── Stickers ── */}
        <img src={p2Smiley} className="sb-el sb-p2__smiley" alt="" draggable={false} />
        <img src={p2Daisy} className="sb-el sb-p2__daisy" alt="" draggable={false} />
        <img src={p2PurpleFlower} className="sb-el sb-p2__purple-flower" alt="" draggable={false} />
        <img src={p2PinkHeart} className="sb-el sb-p2__pink-heart" alt="" draggable={false} />
        <img src={p2YellowStar} className="sb-el sb-p2__yellow-star" alt="" draggable={false} />
        <img src={p2Strawberry} className="sb-el sb-p2__strawberry" alt="" draggable={false} />


        {/* ── Doodles ── */}
        <img src={p2HeartsTop} className="sb-el sb-p2__hearts-top" alt="" draggable={false} />
        <img src={p2StarDoodleTop} className="sb-el sb-p2__star-top" alt="" draggable={false} />
        <img src={p2HeartDoodleL} className="sb-el sb-p2__heart-doodle-l" alt="" draggable={false} />
        <img src={p2StarDoodleLow} className="sb-el sb-p2__star-low" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 3,
    bg: "#111111",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--three">
        {/* Background */}
        <img src={p3Bg} className="sb-p3__bg" alt="" draggable={false} />

        {/* Torn newspaper corners */}
        <img src={p3NewsTop} className="sb-el sb-p3__news-top" alt="" draggable={false} />
        <img src={p3NewsBot} className="sb-el sb-p3__news-bot" alt="" draggable={false} />

        {/* Blue paint stroke */}
        <img src={p3BluePaint} className="sb-el sb-p3__blue-paint" alt="" draggable={false} />

        {/* Enjoy Life lettering */}
        <img src={p3EnjoyLife} className="sb-el sb-p3__enjoy-life" alt="Enjoy Life" draggable={false} />

        {/* Heart doodles */}
        <img src={p3Hearts} className="sb-el sb-p3__hearts" alt="" draggable={false} />

        {/* Pink flower doodle top-right */}
        <img src={p3PinkFlower} className="sb-el sb-p3__pink-flower" alt="" draggable={false} />

        {/* Strawberry sticker right */}
        <img src={p3Strawberry} className="sb-el sb-p3__strawberry" alt="" draggable={false} />

        {/* Single centered photo with gold ribbon on top-left */}
        <div className="sb-p3__single-polaroid">
          <img
            src={p3Photo}
            className="sb-p3__single-photo"
            alt="Friends smiling"
            draggable={false}
          />
          <img
            src={p3Bow}
            className="sb-p3__ribbon"
            alt="Gold ribbon"
            draggable={false}
          />
        </div>

        {/* Rose sticker lower-left */}
        <img src={p3Rose} className="sb-el sb-p3__rose" alt="" draggable={false} />

        {/* "happy birthday BESTIE" lettering */}
        <img src={p3BdayText} className="sb-el sb-p3__bday-text" alt="happy birthday BESTIE" draggable={false} />

        {/* Small doodle elements bottom-right */}
        <img src={p3LinesLeft} className="sb-el sb-p3__lines-left" alt="" draggable={false} />
        <img src={p3StarRight} className="sb-el sb-p3__star-right" alt="" draggable={false} />
        <img src={p3LinesRight} className="sb-el sb-p3__lines-right" alt="" draggable={false} />

        {/* Bunny sticker lower-right */}
        <img src={p3Bunny} className="sb-el sb-p3__bunny" alt="" draggable={false} />

        {/* Active note — tap to read birthday message */}
        <div
          className="sb-el sb-p3__note-wrap"
          onClick={() => onOpenNote(PAGE_3_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read birthday note"
        >
          <img
            src={p2TopNote}
            className="sb-p3__note-img sb-active-note"
            alt="Birthday note"
            draggable={false}
          />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    bg: "#d6c4a8",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--five">
        {/* Full-bleed warm kraft background */}
        <img src={p5Bg} className="sb-p5__bg" alt="" draggable={false} />

        {/* Top-left: Active Good Friends Paper Note (Click to open poetry modal) */}
        <div
          className="sb-el sb-p5__note-wrap"
          onClick={() => onOpenNote(PAGE_4_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Divine"
        >
          <img
            src={p5GoodFriendsNote}
            className="sb-p5__note-img sb-active-note"
            alt="Good Friends Better days ♡"
            draggable={false}
          />
        </div>

        {/* Translucent tape holding Good Friends note */}
        <img src={p5TopTape} className="sb-el sb-p5__top-tape" alt="" draggable={false} />

        {/* Vintage camera sticker top-center */}
        <img src={p5CameraSticker} className="sb-el sb-p5__camera-sticker" alt="" draggable={false} />

        {/* Sunflower sticker left side */}
        <img src={p5Sunflower} className="sb-el sb-p5__sunflower" alt="" draggable={false} />

        {/* Left heart doodle */}
        <img src={p5LeftHeart} className="sb-el sb-p5__left-heart" alt="" draggable={false} />

        {/* Dried white flower bundle moved to right and higher up */}
        <img src={p5FlowerBundle} className="sb-el sb-p5__flower-bundle sb-p5__flower-bundle--right" alt="" draggable={false} />

        {/* Accent lines doodle bottom-left */}
        <img src={p5AccentLines} className="sb-el sb-p5__accent-lines" alt="" draggable={false} />

        {/* Main center polaroid with divinePhoto */}
        <div className="sb-el sb-p5__main-polaroid">
          <img src={divinePhoto} className="sb-p5__main-polaroid-frame" alt="Divine & Hillary" draggable={false} />
        </div>

        {/* Right heart doodle */}
        <img src={p5RightHeart} className="sb-el sb-p5__right-heart" alt="" draggable={false} />

        {/* Small note bottom-right: "Same chaos, different day ☺" */}
        <img src={p5SmallNote} className="sb-el sb-p5__small-note" alt="Same chaos, different day" draggable={false} />

        {/* Green gingham washi tape bottom-right */}
        <img src={p5GreenTape} className="sb-el sb-p5__green-tape" alt="" draggable={false} />

        {/* Pink butterfly sticker bottom-center */}
        <img src={p5Butterfly} className="sb-el sb-p5__butterfly" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 5,
    bg: "#111111",
    render: () => (
      <div className="sb-page sb-page--three">
        {/* Background */}
        <img src={p3Bg} className="sb-p3__bg" alt="" draggable={false} />

        {/* Torn newspaper corners */}
        <img src={p3NewsTop} className="sb-el sb-p3__news-top" alt="" draggable={false} />
        <img src={p3NewsBot} className="sb-el sb-p3__news-bot" alt="" draggable={false} />

        {/* Blue paint stroke */}
        <img src={p3BluePaint} className="sb-el sb-p3__blue-paint" alt="" draggable={false} />

        {/* Enjoy Life lettering */}
        <img src={p3EnjoyLife} className="sb-el sb-p3__enjoy-life" alt="Enjoy Life" draggable={false} />

        {/* Heart doodles */}
        <img src={p3Hearts} className="sb-el sb-p3__hearts" alt="" draggable={false} />

        {/* Pink flower doodle top-right */}
        <img src={p3PinkFlower} className="sb-el sb-p3__pink-flower" alt="" draggable={false} />

        {/* Strawberry sticker right */}
        <img src={p3Strawberry} className="sb-el sb-p3__strawberry" alt="" draggable={false} />

        {/* Upper polaroid — sophie1 */}
        <div className="sb-el sb-p3__upper-polaroid">
          <img src={sophie1} className="sb-p3__upper-frame" alt="Hillary & Sophie" draggable={false} />
        </div>

        {/* Small plaster / overlapping polaroid — sophie3 */}
        <div className="sb-el sb-p3__mini-polaroid">
          <img src={sophie3} className="sb-p3__mini-frame" alt="Hillary & Sophie mini" draggable={false} />
        </div>

        {/* Gold bow bridging the two polaroids */}
        <img src={p3Bow} className="sb-el sb-p3__bow" alt="" draggable={false} />

        {/* Lower polaroid — sophie2 */}
        <div className="sb-el sb-p3__lower-polaroid">
          <img src={sophie2} className="sb-p3__lower-frame" alt="Hillary & Sophie" draggable={false} />
        </div>

        {/* Rose sticker lower-left */}
        <img src={p3Rose} className="sb-el sb-p3__rose" alt="" draggable={false} />

        {/* "happy birthday BESTIE" lettering */}
        <img src={p3BdayText} className="sb-el sb-p3__bday-text" alt="happy birthday BESTIE" draggable={false} />

        {/* Small doodle elements bottom-right */}
        <img src={p3LinesLeft} className="sb-el sb-p3__lines-left" alt="" draggable={false} />
        <img src={p3StarRight} className="sb-el sb-p3__star-right" alt="" draggable={false} />
        <img src={p3LinesRight} className="sb-el sb-p3__lines-right" alt="" draggable={false} />

        {/* Bunny sticker lower-right */}
        <img src={p3Bunny} className="sb-el sb-p3__bunny" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 6,
    bg: "#474a35",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--four">
        {/* Full-bleed background */}
        <img src={p6Bg} className="sb-p4__bg" alt="" draggable={false} />

        {/* Antique quote paper behind polaroids */}
        <img src={p4QuotePaper} className="sb-el sb-p4__quote-paper" alt="Art is not what you see..." draggable={false} />

        {/* Tall dried flower stem on the left */}
        <img src={p4LeftFlower} className="sb-el sb-p4__left-flower" alt="" draggable={false} />

        {/* Lined kraft notebook note on right (Active note from Tony) */}
        <div
          className="sb-el sb-p4__note-wrap"
          onClick={() => onOpenNote(PAGE_6_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Tony"
        >
          <img
            src={p4LinedNote}
            className="sb-p4__note-img sb-active-note"
            alt="Same energy. Bigger dreams. Always you."
            draggable={false}
          />
        </div>

        {/* Single Main Polaroid with Tony */}
        <div className="sb-el sb-p4__lower-polaroid sb-p4__lower-polaroid--single">
          <img src={tonyPhoto} className="sb-p4__lower-polaroid-frame" alt="Tony & Hillary" draggable={false} />
        </div>

        {/* Lower flower cluster overlapping polaroid & note */}
        <img src={p4LowerFlower} className="sb-el sb-p4__lower-flower" alt="" draggable={false} />

        {/* "BIRTHDAY GIRL" lettering */}
        <img src={p4BdayLettering} className="sb-el sb-p4__bday-lettering" alt="BIRTHDAY GIRL" draggable={false} />

        {/* Bottom sweet birthday message */}
        <img src={p4BottomMessage} className="sb-el sb-p4__bottom-message" alt="May your birthday be simple, sweet, and joyful" draggable={false} />
      </div>
    ),
  },
  {
    id: 7,
    bg: "#cad6c5",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--three">
        {/* Background - Sage watercolor texture */}
        <img src={p3SageBg} className="sb-p3__bg sb-p3__bg--alt" alt="" draggable={false} />

        {/* Torn newspaper corners */}
        <img src={p3NewsTop} className="sb-el sb-p3__news-top" alt="" draggable={false} />
        <img src={p3NewsBot} className="sb-el sb-p3__news-bot" alt="" draggable={false} />

        {/* Blue paint stroke */}
        <img src={p3BluePaint} className="sb-el sb-p3__blue-paint" alt="" draggable={false} />

        {/* Enjoy Life lettering */}
        <img src={p3EnjoyLife} className="sb-el sb-p3__enjoy-life" alt="Enjoy Life" draggable={false} />

        {/* Heart doodles */}
        <img src={p3Hearts} className="sb-el sb-p3__hearts" alt="" draggable={false} />

        {/* Pink flower doodle top-right */}
        <img src={p3PinkFlower} className="sb-el sb-p3__pink-flower" alt="" draggable={false} />

        {/* Strawberry sticker right */}
        <img src={p3Strawberry} className="sb-el sb-p3__strawberry" alt="" draggable={false} />

        {/* Upper polaroid — praise1 */}
        <div className="sb-el sb-p3__upper-polaroid">
          <img src={praise1} className="sb-p3__upper-frame" alt="Hillary & El-praise" draggable={false} />
        </div>

        {/* Gold bow bridging the two polaroids */}
        <img src={p3Bow} className="sb-el sb-p3__bow" alt="" draggable={false} />

        {/* Lower polaroid — praise2 */}
        <div className="sb-el sb-p3__lower-polaroid">
          <img src={praise2} className="sb-p3__lower-frame" alt="Hillary & El-praise" draggable={false} />
        </div>

        {/* Rose sticker lower-left */}
        <img src={p3Rose} className="sb-el sb-p3__rose" alt="" draggable={false} />

        {/* Active Note from El-praise replacing "happy birthday BESTIE" */}
        <div
          className="sb-el sb-p3__elpraise-note-wrap"
          onClick={() => onOpenNote(PAGE_7_ELPRAISE_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from El-praise"
        >
          <img
            src={elPraiseNote}
            className="sb-p3__elpraise-note-img sb-active-note"
            alt="Note from El-praise"
            draggable={false}
          />
        </div>

        {/* Small doodle elements bottom-right */}
        <img src={p3LinesLeft} className="sb-el sb-p3__lines-left" alt="" draggable={false} />
        <img src={p3StarRight} className="sb-el sb-p3__star-right" alt="" draggable={false} />
        <img src={p3LinesRight} className="sb-el sb-p3__lines-right" alt="" draggable={false} />

        {/* Bunny sticker lower-right */}
        <img src={p3Bunny} className="sb-el sb-p3__bunny" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 8,
    bg: "#c9b4e0",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--three sb-page--eight">
        {/* Background from Page 2 */}
        <img src={p2Bg} className="sb-p3__bg" alt="" draggable={false} />

        {/* Torn newspaper corners */}
        <img src={p3NewsTop} className="sb-el sb-p3__news-top" alt="" draggable={false} />
        <img src={p3NewsBot} className="sb-el sb-p3__news-bot" alt="" draggable={false} />

        {/* Blue paint stroke across mid */}
        <img src={p3BluePaint} className="sb-el sb-p3__blue-paint" alt="" draggable={false} />

        {/* Top-right Enjoy Life lettering */}
        <img src={p3EnjoyLife} className="sb-el sb-p8__enjoy-life" alt="Enjoy Life" draggable={false} />

        {/* Heart doodles top left */}
        <img src={p3Hearts} className="sb-el sb-p3__hearts" alt="" draggable={false} />

        {/* Pink flower doodle top-right */}
        <img src={p3PinkFlower} className="sb-el sb-p3__pink-flower" alt="" draggable={false} />

        {/* Strawberry sticker top-right */}
        <img src={p3Strawberry} className="sb-el sb-p8__strawberry" alt="" draggable={false} />

        {/* First Melody photo (tilted left, top-left quadrant) */}
        <div className="sb-el sb-p8__melody1-wrap">
          <img src={melody1} className="sb-p8__melody-img" alt="Melody & Hillary moment 1" draggable={false} />
        </div>

        {/* Gold bow accent bridging between the two photos */}
        <img src={p3Bow} className="sb-el sb-p8__bow" alt="" draggable={false} />

        {/* Second Melody photo (tilted right, mid-right quadrant) */}
        <div className="sb-el sb-p8__melody2-wrap">
          <img src={melody2} className="sb-p8__melody-img" alt="Melody & Hillary moment 2" draggable={false} />
        </div>

        {/* Active Note from Melody replacing "happy birthday BESTIE" */}
        <div
          className="sb-el sb-p8__note-wrap"
          onClick={() => onOpenNote(PAGE_8_MELODY_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Melody"
        >
          <img
            src={p2BottomNote}
            className="sb-p8__note-img sb-active-note"
            alt="Note from Melody"
            draggable={false}
          />
        </div>

        {/* Rose sticker lower-right */}
        <img src={p3Rose} className="sb-el sb-p8__rose" alt="" draggable={false} />

        {/* Small doodle elements bottom-right */}
        <img src={p3LinesLeft} className="sb-el sb-p3__lines-left" alt="" draggable={false} />
        <img src={p3StarRight} className="sb-el sb-p3__star-right" alt="" draggable={false} />
        <img src={p3LinesRight} className="sb-el sb-p3__lines-right" alt="" draggable={false} />

        {/* Bunny sticker bottom-center */}
        <img src={p3Bunny} className="sb-el sb-p8__bunny" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 9,
    bg: "#1c2b22",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--four sb-page--nine">
        {/* Full-bleed background */}
        <img src={p4Bg} className="sb-p4__bg" alt="" draggable={false} />

        {/* Antique quote paper behind polaroids */}
        <img src={p4QuotePaper} className="sb-el sb-p4__quote-paper" alt="Art is not what you see..." draggable={false} />

        {/* Tall dried flower stem on the left */}
        <img src={p4LeftFlower} className="sb-el sb-p4__left-flower" alt="" draggable={false} />

        {/* Lined kraft notebook note on right (Active note from Mabel) */}
        <div
          className="sb-el sb-p4__note-wrap sb-p9__note-wrap"
          onClick={() => onOpenNote(PAGE_9_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Mabel"
        >
          <img
            src={p4LinedNote}
            className="sb-p4__note-img sb-active-note"
            alt="Note from Mabel"
            draggable={false}
          />
        </div>

        {/* 3 Photos from Mabel folder arranged in a dynamic collage */}
        {/* Photo 1: Upper right */}
        <div className="sb-el sb-p9__photo-wrap sb-p9__photo-wrap--1">
          <img src={mabel1} className="sb-p9__photo-img" alt="Mabel & Hillary 1" draggable={false} />
        </div>
        <img src={p4OrangeTape} className="sb-el sb-p9__tape-1" alt="" draggable={false} />

        {/* Photo 2: Mid-left hero */}
        <div className="sb-el sb-p9__photo-wrap sb-p9__photo-wrap--2">
          <img src={mabel2} className="sb-p9__photo-img" alt="Mabel & Hillary 2" draggable={false} />
        </div>
        <img src={p4LowerLeftTape} className="sb-el sb-p9__tape-2" alt="" draggable={false} />

        {/* Photo 3: Lower right overlapping */}
        <div className="sb-el sb-p9__photo-wrap sb-p9__photo-wrap--3">
          <img src={mabel3} className="sb-p9__photo-img" alt="Mabel & Hillary 3" draggable={false} />
        </div>

        {/* Lower flower cluster overlapping polaroid & note */}
        <img src={p4LowerFlower} className="sb-el sb-p4__lower-flower" alt="" draggable={false} />

        {/* "BIRTHDAY GIRL" lettering */}
        <img src={p4BdayLettering} className="sb-el sb-p4__bday-lettering" alt="BIRTHDAY GIRL" draggable={false} />

        {/* Bottom sweet birthday message */}
        <img src={p4BottomMessage} className="sb-el sb-p4__bottom-message" alt="May your birthday be simple, sweet, and joyful" draggable={false} />
      </div>
    ),
  },
  {
    id: 10,
    bg: "#111111",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--four">
        {/* Full-bleed background */}
        <img src={p3Bg} className="sb-p4__bg" alt="" draggable={false} />

        {/* Active Note 1: Antique quote paper (TLH note 1) */}
        <div
          className="sb-el sb-p4__quote-note-wrap"
          onClick={() => onOpenNote(PAGE_10_NOTE_1)}
          role="button"
          tabIndex={0}
          aria-label="Read note 1 from TLH"
        >
          <img
            src={p4QuotePaper}
            className="sb-p4__quote-note-img sb-active-note"
            alt="Note from TLH: Not Forgotten"
            draggable={false}
          />
        </div>

        {/* Tall dried flower stem on the left */}
        <img src={p4LeftFlower} className="sb-el sb-p4__left-flower" alt="" draggable={false} />

        {/* Active Note 2: Lined kraft notebook note on right (TLH note 2) */}
        <div
          className="sb-el sb-p4__lined-note-wrap"
          onClick={() => onOpenNote(PAGE_10_NOTE_2)}
          role="button"
          tabIndex={0}
          aria-label="Read note 2 from TLH"
        >
          <img
            src={p4LinedNote}
            className="sb-p4__note-img sb-active-note"
            alt="Note from TLH: To Our Beloved Hillary"
            draggable={false}
          />
        </div>

        {/* Lower polaroid with TLH image */}
        <div className="sb-el sb-p4__lower-polaroid sb-p4__lower-polaroid--single">
          <img src={tlhPhoto} className="sb-p4__lower-polaroid-frame" alt="TLH" draggable={false} />
        </div>

        {/* Masking tape on bottom-left corner of lower polaroid */}
        <img src={p4LowerLeftTape} className="sb-el sb-p4__lower-left-tape" alt="" draggable={false} />

        {/* Lower flower cluster overlapping polaroid & note */}
        <img src={p4LowerFlower} className="sb-el sb-p4__lower-flower" alt="" draggable={false} />

        {/* Crinkled orange tape holding the lower flower */}
        <img src={p4OrangeTape} className="sb-el sb-p4__orange-tape" alt="" draggable={false} />

        {/* "BIRTHDAY GIRL" lettering */}
        <img src={p4BdayLettering} className="sb-el sb-p4__bday-lettering" alt="BIRTHDAY GIRL" draggable={false} />

        {/* Bottom sweet birthday message */}
        <img src={p4BottomMessage} className="sb-el sb-p4__bottom-message" alt="May your birthday be simple, sweet, and joyful" draggable={false} />
      </div>
    ),
  },
  {
    id: 11,
    bg: "#d6c4a8",
    render: (onOpenNote, onOpenGallery) => (
      <div className="sb-page sb-page--five">
        {/* Full-bleed warm kraft background */}
        <img src={p5Bg} className="sb-p5__bg" alt="" draggable={false} />

        {/* Top-left: Active Good Friends Paper Note (Click to open poetry modal from Gbemi) */}
        <div
          className="sb-el sb-p5__note-wrap"
          onClick={() => onOpenNote(PAGE_11_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Gbemi"
        >
          <img
            src={p5GoodFriendsNote}
            className="sb-p5__note-img sb-active-note"
            alt="Good Friends Better days ♡"
            draggable={false}
          />
        </div>

        {/* Translucent tape holding Good Friends note */}
        <img src={p5TopTape} className="sb-el sb-p5__top-tape" alt="" draggable={false} />

        {/* Vintage camera sticker top-center */}
        <img src={p5CameraSticker} className="sb-el sb-p5__camera-sticker" alt="" draggable={false} />

        {/* Sunflower sticker left side */}
        <img src={p5Sunflower} className="sb-el sb-p5__sunflower" alt="" draggable={false} />

        {/* Left heart doodle */}
        <img src={p5LeftHeart} className="sb-el sb-p5__left-heart" alt="" draggable={false} />

        {/* Dried white flower bundle on left with tape */}
        <img src={p5FlowerBundle} className="sb-el sb-p5__flower-bundle" alt="" draggable={false} />

        {/* Accent lines doodle bottom-left */}
        <img src={p5AccentLines} className="sb-el sb-p5__accent-lines" alt="" draggable={false} />

        {/* Main center polaroid with gbemiMain */}
        <div className="sb-el sb-p5__main-polaroid">
          <img src={gbemiMain} className="sb-p5__main-polaroid-frame" alt="Gbemi & Hillary" draggable={false} />
        </div>

        {/* Right 3-photo vertical strip with gbemiGallery (Active Picture - opens bento gallery modal) */}
        <div
          className="sb-el sb-p5__photo-strip"
          onClick={() => onOpenGallery && onOpenGallery()}
          role="button"
          tabIndex={0}
          aria-label="View Gbemi photo gallery"
        >
          <img
            src={gbemiGallery}
            className="sb-p5__photo-strip-img sb-active-picture"
            alt="Gbemi gallery"
            draggable={false}
          />
        </div>

        {/* Tape at top of photo strip */}
        <img src={p5StripTape} className="sb-el sb-p5__strip-tape" alt="" draggable={false} />

        {/* Right heart doodle */}
        <img src={p5RightHeart} className="sb-el sb-p5__right-heart" alt="" draggable={false} />

        {/* Small note bottom-right: "Same chaos, different day ☺" */}
        <img src={p5SmallNote} className="sb-el sb-p5__small-note" alt="Same chaos, different day" draggable={false} />

        {/* Green gingham washi tape bottom-right */}
        <img src={p5GreenTape} className="sb-el sb-p5__green-tape" alt="" draggable={false} />

        {/* Pink butterfly sticker bottom-center */}
        <img src={p5Butterfly} className="sb-el sb-p5__butterfly" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 12,
    bg: "#474a35",
    render: (onOpenNote) => (
      <div className="sb-page sb-page--six">
        {/* Full-bleed olive green background */}
        <img src={p6Bg} className="sb-p6__bg" alt="" draggable={false} />

        {/* Top-left: Active Handwritten paper note */}
        <div
          className="sb-el sb-p6__note-wrap"
          onClick={() => onOpenNote(PAGE_7_NOTE)}
          role="button"
          tabIndex={0}
          aria-label="Read note from Barbie boy"
        >
          <img
            src={p6Note}
            className="sb-p6__note-img sb-active-note"
            alt="See as GOD don help am..."
            draggable={false}
          />
        </div>

        {/* Top-right: Military rank chevron badge with star */}
        <img src={p6Badge} className="sb-el sb-p6__badge" alt="Military chevron badge" draggable={false} />

        {/* Center: Soldier polaroid with top tape */}
        <div className="sb-el sb-p6__main-polaroid">
          <img src={p6Polaroid} className="sb-p6__main-polaroid-img" alt="Soldier" draggable={false} />
        </div>

        {/* Bottom-left: Torn camouflage collage corner */}
        <img src={p6CamoCorner} className="sb-el sb-p6__camo-corner" alt="" draggable={false} />

        {/* Bottom-right: Military binoculars sticker */}
        <img src={p6Binoculars} className="sb-el sb-p6__binoculars" alt="Binoculars" draggable={false} />
      </div>
    ),
  },
];

type Dir = "forward" | "back";

interface AnimState {
  from: number;
  to: number;
  dir: Dir;
}

export default function ScrapbookPage() {
  const [current, setCurrent] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("sb_page");
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < PAGES.length) return idx;
      }
    } catch (_) { /* storage unavailable */ }
    return 0;
  });
  const [animState, setAnimState] = useState<AnimState | null>(null);
  const [activeNote, setActiveNote] = useState<NoteMessage | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Asset preloading & baking effect
  useEffect(() => {
    let isMounted = true;
    const totalAssets = ALL_SCRAPBOOK_MEDIA.length;
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      if (isMounted) {
        setPreloadProgress(Math.min(100, Math.round((loadedCount / totalAssets) * 100)));
      }
    };

    // Preload all visual media in parallel into the browser cache
    const promises = ALL_SCRAPBOOK_MEDIA.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.complete) {
          updateProgress();
          resolve();
        } else {
          img.onload = () => {
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            updateProgress();
            resolve(); // Don't block whole experience on an isolated asset error
          };
        }
      });
    });

    // Fallback timer: Never leave user stuck on slow connection (max 3.5s)
    const safetyTimeout = setTimeout(() => {
      if (isMounted && !isPreloaded) {
        setIsPreloaded(true);
      }
    }, 3500);

    Promise.all(promises).then(() => {
      if (isMounted) {
        // Small pause at 100% to let GPU decode textures
        setTimeout(() => {
          if (isMounted) setIsPreloaded(true);
        }, 250);
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Background music management
  useEffect(() => {
    if (!isPreloaded) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const playAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy prevented immediate playback; wait for user interaction
          setIsPlaying(false);
        });
    };

    // Try playing immediately
    playAudio();

    // If blocked by browser autoplay policy, start on first click or touch anywhere on the page
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("pointerdown", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      audio.pause();
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [isPreloaded]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const goTo = (next: number, dir: Dir) => {
    if (animState || next < 0 || next >= PAGES.length || next === current) return;
    setAnimState({ from: current, to: next, dir });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setAnimState(null);
      try { localStorage.setItem("sb_page", String(next)); } catch (_) { }
    }, 680);
  };

  const prev = () => goTo(current - 1, "back");
  const next = () => goTo(current + 1, "forward");

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't turn pages while reading a poetry note modal or viewing gallery modal
      if (activeNote || isGalleryOpen) return;
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, animState, activeNote, isGalleryOpen]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (activeNote || isGalleryOpen) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || activeNote || isGalleryOpen) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  const page = PAGES[current];

  return (
    <>
      {/* ── Preload & Texture Baking Screen ── */}
      <div
        className={`sb-preloader ${isPreloaded ? "sb-preloader--done" : ""}`}
        aria-hidden={isPreloaded}
      >
        <div className="sb-preloader__card">
          <div className="sb-preloader__tape" />
          <div className="sb-preloader__icon-box">
            <span className="sb-preloader__book-icon">📖</span>
          </div>
          <h2 className="sb-preloader__title">Opening Hillary's Scrapbook...</h2>
          <p className="sb-preloader__status">
            {preloadProgress < 100
              ? `Gathering precious memories & polaroids... (${preloadProgress}%)`
              : "Almost ready! Unfolding the first page... ✨"}
          </p>
          <div className="sb-preloader__progress-bar">
            <div
              className="sb-preloader__progress-fill"
              style={{ width: `${preloadProgress}%` }}
            />
          </div>
          <div className="sb-preloader__count">
            {preloadProgress}% baked
          </div>
        </div>
      </div>

      <div
        className={`sb-viewer ${isPreloaded ? "sb-viewer--ready" : ""}`}
        style={{ "--sb-bg": page.bg } as React.CSSProperties}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* ── Book canvas with tactile 3D perspective ── */}
        <div className="sb-book">
        {animState ? (
          <>
            {/* Underlying Page: already visible beneath while turning */}
            <div
              className={`sb-sheet sb-sheet--under sb-sheet--under-${animState.dir}`}
              style={{ zIndex: 1 }}
            >
              {PAGES[animState.dir === "forward" ? animState.to : animState.from].render(
                setActiveNote,
                () => setIsGalleryOpen(true)
              )}
              <div className={`sb-shadow-overlay sb-shadow-overlay--${animState.dir}`} />
            </div>

            {/* Turning Page: flexible paper curling, skewing, and flipping */}
            <div
              className={`sb-sheet sb-sheet--turning sb-sheet--turning-${animState.dir}`}
              style={{ zIndex: 10 }}
            >
              <div className="sb-sheet__inner">
                {PAGES[animState.dir === "forward" ? animState.from : animState.to].render(setActiveNote, () => setIsGalleryOpen(true))}
                <div className="sb-paper-sheen" />
              </div>
            </div>
          </>
        ) : (
          <div className="sb-sheet sb-sheet--static" style={{ zIndex: 1 }}>
            {PAGES[current].render(setActiveNote, () => setIsGalleryOpen(true))}
          </div>
        )}
      </div>

      {/* ── Background Music Element ── */}
      <audio ref={audioRef} src={bgSong} loop preload="auto" />

      {/* ── Music Toggle Button ── */}
      <button
        className={`sb-music-toggle ${isPlaying ? "sb-music-toggle--playing" : ""}`}
        onClick={toggleMusic}
        title={isPlaying ? "Mute music" : "Play music"}
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        <span className="sb-music-toggle__icon">
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.27 4.27c-.41.28-.86.5-1.34.62l1.37 1.37c.7-.22 1.36-.57 1.93-1.02L20.73 21 22 19.73 4.27 3zM14 7h4V3h-6v4.18l2 2V7z" />
            </svg>
          )}
        </span>
        <span className="sb-music-bars">
          <span />
          <span />
          <span />
        </span>
        <span className="sb-music-label">{isPlaying ? "Music On" : "Music Off"}</span>
      </button>

      {/* ── Nav arrows ── */}
      <button
        className="sb-nav sb-nav--prev"
        onClick={prev}
        disabled={current === 0 || !!animState}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className="sb-nav sb-nav--next"
        onClick={next}
        disabled={current === PAGES.length - 1 || !!animState}
        aria-label="Next page"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Page counter + dots ── */}
      <div className="sb-counter">
        <div className="sb-counter__track">
          {PAGES.map((_, i) => (
            <button
              key={i}
              className={[
                "sb-counter__dot",
                (animState ? animState.to : current) === i ? "sb-counter__dot--active" : "",
              ].join(" ")}
              onClick={() => goTo(i, i > current ? "forward" : "back")}
              disabled={!!animState}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span className="sb-counter__label">
          {(animState ? animState.to : current) + 1} / {PAGES.length}
        </span>
      </div>

      {/* ── Full-Screen Elegant Poetry Modal ── */}
      <PoetryModal
        isOpen={!!activeNote}
        onClose={() => setActiveNote(null)}
        note={activeNote}
      />

      {/* ── Bento Grid Image Gallery Modal (Gbemi page) ── */}
      <BentoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={GBEMI_GALLERY_IMAGES}
      />
    </div>
    </>
  );
}
