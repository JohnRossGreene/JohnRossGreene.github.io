const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 0 Kelvin outside, and :insertx: was having a rough day. They took a long, dangerous journey to  :inserty:, and when they got there they started a fire, got comfortable by the warmth of the coiled sword in the center, then :insertz:. Skeletor was also there. — :insertx: weighs 900 pounds. What a fun fact that is relevant and well thought out in this story';
const insertX = ['John McAffee', 'Doug Walker from the Smash Hit Art House Film, Kickassia', 'Geroge Lopez dressed like the Grim Reaper'];
const insertY = ['The College Park MARTA station', 'A ditch', 'The decaying ruins of Old Florida'];
const insertZ = ['Error - NaN', 'farted',  'recieved 28 stab wounds to the chest', '(these jokes keep getting less creative huh)'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Skeletor', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('0 Kelvin', temperature);
    newStory = newStory.replaceAll('900 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
