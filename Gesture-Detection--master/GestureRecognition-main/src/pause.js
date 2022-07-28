import{Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const Pause = new GestureDescription('Pause');
Pause.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Pause.addDirection(Finger.Thumb, FingerDirection.Verticalup,  0.8);

Pause.addDirection(Finger.Index, FingerDirection.Verticalup,  0.8);
Pause.addDirection(Finger.Middle, FingerDirection.Verticalup,  0.8);
Pause.addDirection(Finger.Ring, FingerDirection.Verticalup,  0.8);
Pause.addDirection(Finger.Pinky, FingerDirection.Verticalup,  0.8);

