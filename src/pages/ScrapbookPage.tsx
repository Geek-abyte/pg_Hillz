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
import p2Bg from "../assets/page2/00_background_reconstructed.png";
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
import p2Video from "../assets/page2/WhatsApp Video 2026-09-27 at 09.53.11.mp4";
import p2BottomSheet from "../assets/page2/21_bottom_yellow_paper_sheet.png";
import PoetryModal, { type NoteMessage } from "../components/PoetryModal";

/* ── Page 3 assets ───────────────────────────────────────── */
import p3Bg from "../assets/page3/00_background_black_paper.jpeg";
import p3NewsTop from "../assets/page3/01_top_left_newspaper.png";
import p3NewsBot from "../assets/page3/02_bottom_right_newspaper.png";
import p3BluePaint from "../assets/page3/03_blue_paint_stroke.png";
import p3EnjoyLife from "../assets/page3/04_enjoy_life_lettering.png";
import p3Hearts from "../assets/page3/05_upper_heart_doodles.png";
import p3PinkFlower from "../assets/page3/06_upper_pink_flower_doodle.png";
import p3Strawberry from "../assets/page3/07_strawberry_sticker.png";
import p3Bow from "../assets/page3/08_gold_bow.png";
import p3Rose from "../assets/page3/09_rose_sticker.png";
import p3UpperFrame from "../assets/page3/10_upper_polaroid_frame.png";
import p3LowerFrame from "../assets/page3/11_lower_polaroid_frame.png";
import p3UpperPhoto from "../assets/page3/12_upper_main_photo.png";
import p3LowerPhoto from "../assets/page3/13_lower_main_photo.png";
import p3BdayText from "../assets/page3/14_birthday_lettering.png";
import p3LinesLeft from "../assets/page3/17_lower_left_birthday_lines.png";
import p3StarRight from "../assets/page3/18_lower_right_small_star.png";
import p3LinesRight from "../assets/page3/19_lower_right_small_lines.png";
import p3Bunny from "../assets/page3/16_bunny_sticker.png";

/* ── Page 4 assets ───────────────────────────────────────── */
import p4Bg from "../assets/page4/00_background_reconstructed.jpeg";
import p4NameLettering from "../assets/page4/01_name_lettering.png";
import p4QuotePaper from "../assets/page4/02_quote_paper.png";
import p4UpperFrame from "../assets/page4/03_upper_polaroid_frame.png";
import p4TopTape from "../assets/page4/05_top_tape.png";
import p4LinedNote from "../assets/page4/06_right_lined_note.png";
import p4LowerFrame from "../assets/page4/07_lower_polaroid_frame.png";
import p4LeftFlower from "../assets/page4/09_left_flower.png";
import p4LowerFlower from "../assets/page4/10_lower_flower.png";
import p4OrangeTape from "../assets/page4/11_orange_tape.png";
import p4BdayLettering from "../assets/page4/12_birthday_girl_lettering.png";
import p4BottomMessage from "../assets/page4/13_bottom_message.png";
import p4ArrowDoodle from "../assets/page4/15_arrow_doodle.png";
import p4LowerLeftTape from "../assets/page4/16_lower_left_tape.png";

/* ── Page 5 assets ───────────────────────────────────────── */
import p5Bg from "../assets/page5/00_background_reconstructed.jpeg";
import p5GoodFriendsNote from "../assets/page5/01_good_friends_paper_note.png";
import p5TopTape from "../assets/page5/02_top_tape.png";
import p5CameraSticker from "../assets/page5/03_camera_sticker.png";
import p5Sunflower from "../assets/page5/04_sunflower_sticker.png";
import p5MainPolaroidFrame from "../assets/page5/05_main_polaroid_frame.png";
import p5PhotoStrip from "../assets/page5/07_right_photo_strip.png";
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

export const PAGE_2_NOTE: NoteMessage = {
  title: "My own old woman🙈🌸❤️",
  author: "Rejoice",
  content: `Finally she's healthy and strong😹

Honestly when we met, I never imagined that you would become such an important part of my life, what started as simply attending a new church and meeting this girl in a blue dress has grown into a friendship that I genuinely treasure so much. we’ve had so many moments together the good days, the stressful days, the random laughs, the deep conversations, the little misunderstandings, the silly moments that only we would understand, and all the memories we’ve created along the way, looking back now I’m just grateful that life allowed our paths to cross. You’ve been there for me in ways you probably don't even realise, and having someone I can talk to, laugh with, be vulnerable with, and simply be myself around is something I will never take for granted. Thank you for being you, your love [ even though act as if you don't love me😹], your support, your patience, and for all the beautiful memories we’ve shared [ i know you can't do without me🙈]. As you begin another year, I genuinely pray that life is kind to you, may this new chapter bring you happiness that is genuine, peace that cannot be shaken, opportunities that take you closer to your dreams, and people who love you sincerely, may you never have to question your worth, and may you always have reasons to smile.

I pray that the hands of the lord continues to rest upon you, i pray that you fulfill your purpose in life and i pray that the lord will satisfy you with long life and of course we'll grow old together🙈 
🥹❤️ I truly cherish our friendship, and I hope we get to make so many more beautiful memories together.

Happy birthday, my girl
You know I'll always love you🥂💕`,
};

type PageRenderFn = (onOpenNote: (note: NoteMessage) => void) => React.ReactNode;

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

        {/* ── Polaroid (with WhatsApp video contained in the cutout window) ── */}
        <div className="sb-el sb-p2__polaroid-wrap">
          <video
            className="sb-p2__video"
            src={p2Video}
            autoPlay
            loop
            muted
            playsInline
          />
          <img
            src={p2PolaroidFrame}
            className="sb-p2__polaroid-frame"
            alt=""
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
          <span className="sb-note-lead__text">✨ tap the note to read a message</span>
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

        {/* Upper polaroid — photo behind frame */}
        <div className="sb-el sb-p3__upper-polaroid">
          <img src={p3UpperPhoto} className="sb-p3__upper-photo" alt="Friends smiling" draggable={false} />
          <img src={p3UpperFrame} className="sb-p3__upper-frame" alt="" draggable={false} />
        </div>

        {/* Gold bow bridging the two polaroids */}
        <img src={p3Bow} className="sb-el sb-p3__bow" alt="" draggable={false} />

        {/* Lower polaroid — photo behind frame */}
        <div className="sb-el sb-p3__lower-polaroid">
          <img src={p3LowerPhoto} className="sb-p3__lower-photo" alt="Friends hugging" draggable={false} />
          <img src={p3LowerFrame} className="sb-p3__lower-frame" alt="" draggable={false} />
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
    id: 4,
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

        {/* Upper polaroid — photo behind frame */}
        <div className="sb-el sb-p3__upper-polaroid">
          <img src={p3UpperPhoto} className="sb-p3__upper-photo" alt="Friends smiling" draggable={false} />
          <img src={p3UpperFrame} className="sb-p3__upper-frame" alt="" draggable={false} />
        </div>

        {/* Gold bow bridging the two polaroids */}
        <img src={p3Bow} className="sb-el sb-p3__bow" alt="" draggable={false} />

        {/* Lower polaroid — photo behind frame */}
        <div className="sb-el sb-p3__lower-polaroid">
          <img src={p3LowerPhoto} className="sb-p3__lower-photo" alt="Friends hugging" draggable={false} />
          <img src={p3LowerFrame} className="sb-p3__lower-frame" alt="" draggable={false} />
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
    id: 5,
    bg: "#1c2b22",
    render: () => (
      <div className="sb-page sb-page--four">
        {/* Full-bleed background */}
        <img src={p4Bg} className="sb-p4__bg" alt="" draggable={false} />

        {/* Top-left: Name Lettering */}
        <img src={p4NameLettering} className="sb-el sb-p4__name-lettering" alt="Donha Stroupe" draggable={false} />

        {/* Curved dashed arrow pointing to upper polaroid */}
        <img src={p4ArrowDoodle} className="sb-el sb-p4__arrow-doodle" alt="" draggable={false} />

        {/* Antique quote paper behind polaroids */}
        <img src={p4QuotePaper} className="sb-el sb-p4__quote-paper" alt="Art is not what you see..." draggable={false} />

        {/* Tall dried flower stem on the left */}
        <img src={p4LeftFlower} className="sb-el sb-p4__left-flower" alt="" draggable={false} />

        {/* Upper polaroid */}
        <div className="sb-el sb-p4__upper-polaroid">
          <img src={p4UpperFrame} className="sb-p4__upper-polaroid-frame" alt="" draggable={false} />
        </div>

        {/* Masking tape top-right of upper polaroid */}
        <img src={p4TopTape} className="sb-el sb-p4__top-tape" alt="" draggable={false} />

        {/* Lined kraft notebook note on right */}
        <img src={p4LinedNote} className="sb-el sb-p4__lined-note" alt="Same energy. Bigger dreams. Always you." draggable={false} />

        {/* Lower polaroid (main focus) */}
        <div className="sb-el sb-p4__lower-polaroid">
          <img src={p4LowerFrame} className="sb-p4__lower-polaroid-frame" alt="" draggable={false} />
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
    id: 6,
    bg: "#d6c4a8",
    render: () => (
      <div className="sb-page sb-page--five">
        {/* Full-bleed warm kraft background */}
        <img src={p5Bg} className="sb-p5__bg" alt="" draggable={false} />

        {/* Top-left: Good Friends Better days note */}
        <img src={p5GoodFriendsNote} className="sb-el sb-p5__good-friends-note" alt="Good Friends Better days ♡" draggable={false} />

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

        {/* Main center polaroid with friends laughing */}
        <div className="sb-el sb-p5__main-polaroid">
          <img src={p5MainPolaroidFrame} className="sb-p5__main-polaroid-frame" alt="Good Friends" draggable={false} />
        </div>

        {/* Right 3-photo vertical strip */}
        <div className="sb-el sb-p5__photo-strip">
          <img src={p5PhotoStrip} className="sb-p5__photo-strip-img" alt="Memories strip" draggable={false} />
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
    id: 7,
    bg: "#474a35",
    render: () => (
      <div className="sb-page sb-page--six">
        {/* Full-bleed olive green background */}
        <img src={p6Bg} className="sb-p6__bg" alt="" draggable={false} />

        {/* Top-left: Handwritten paper note */}
        <img src={p6Note} className="sb-el sb-p6__note" alt="See as GOD don help am..." draggable={false} />

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
  {
    id: 8,
    bg: "#2d4a35",
    render: () => (
      <div className="sb-page sb-page--seven">
        <div className="sb-tape sb-tape--top-left" />
        <img src={birthdayNote} className="sb-el sb-p7__title" alt="Happy Birthday Hillary" draggable={false} />
        <div className="sb-closing">
          <p className="sb-closing__text">
            Happy Birthday,<br />
            <strong>Hillary.</strong><br />
            <br />
            Here's to every<br />beautiful chapter ahead. 📖
          </p>
        </div>
        <img src={mainPolaroid} className="sb-el sb-p7__photo" alt="" draggable={false} />
        <img src={flower} className="sb-el sb-p7__flower" alt="" draggable={false} />
        <img src={smiley} className="sb-el sb-p7__smiley" alt="" draggable={false} />
        <img src={yellowHeart} className="sb-el sb-p7__heart" alt="" draggable={false} />
        <img src={butterfly} className="sb-el sb-p7__butterfly" alt="" draggable={false} />
        <div className="sb-closing__fin">✦ fin ✦</div>
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (next: number, dir: Dir) => {
    if (animState || next < 0 || next >= PAGES.length || next === current) return;
    setAnimState({ from: current, to: next, dir });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setAnimState(null);
      try { localStorage.setItem("sb_page", String(next)); } catch (_) {}
    }, 680);
  };

  const prev = () => goTo(current - 1, "back");
  const next = () => goTo(current + 1, "forward");

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't turn pages while reading a poetry note modal
      if (activeNote) return;
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, animState, activeNote]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (activeNote) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || activeNote) return;
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
    <div
      className="sb-viewer"
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
              {PAGES[animState.dir === "forward" ? animState.to : animState.from].render(setActiveNote)}
              <div className={`sb-shadow-overlay sb-shadow-overlay--${animState.dir}`} />
            </div>

            {/* Turning Page: flexible paper curling, skewing, and flipping */}
            <div
              className={`sb-sheet sb-sheet--turning sb-sheet--turning-${animState.dir}`}
              style={{ zIndex: 10 }}
            >
              <div className="sb-sheet__inner">
                {PAGES[animState.dir === "forward" ? animState.from : animState.to].render(setActiveNote)}
                <div className="sb-paper-sheen" />
              </div>
            </div>
          </>
        ) : (
          <div className="sb-sheet sb-sheet--static" style={{ zIndex: 1 }}>
            {PAGES[current].render(setActiveNote)}
          </div>
        )}
      </div>

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
    </div>
  );
}
