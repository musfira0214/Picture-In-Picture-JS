const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.onplay(); 
        }

    } catch (error) {
        ///Catch Error Here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async() =>{
    ///disable Button
    button.display = true;

    //Start picture in picture
    await videoElement.requestPictureInPicture(); 

    // Reset Button
    button.disabled = false;

});
/// ON LOAD

selectMediaStream();