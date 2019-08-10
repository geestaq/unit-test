const calculateStylePoints = (styleNotes) => {

  if(!Array.isArray(styleNotes)) return 0;

  return styleNotes.reduce(
    (total, note) => total + note, 0 //suma not
  )
  - Math.min(...styleNotes) //min. nota
  - Math.max(...styleNotes); //maks. nota
};

module.exports = calculateStylePoints;
