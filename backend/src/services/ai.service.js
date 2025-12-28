exports.findSimilarIncidents = async (incident) => {
  const keywords = incident.title.split(" ");

  return await Incident.find({
    _id: { $ne: incident._id },
    title: { $regex: keywords.join("|"), $options: "i" }
  }).limit(3);
};
