import{Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ThumbsDown = new GestureDescription('thumbs_down');
ThumbsDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
ThumbsDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);
ThumbsDown.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ThumbsDown.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ThumbsDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ThumbsDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);