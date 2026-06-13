function detectService(query) {
  query = query.toLowerCase();

  if (
    query.includes("event") ||
    query.includes("workshop") ||
    query.includes("fest")
  ) {
    return "events";
  }

  if (
    query.includes("library") ||
    query.includes("book") ||
    query.includes("journal")
  ) {
    return "library";
  }

  if (
    query.includes("placement") ||
    query.includes("internship") ||
    query.includes("job")
  ) {
    return "placements";
  }

  if (
    query.includes("food") ||
    query.includes("canteen") ||
    query.includes("cafeteria")
  ) {
    return "cafeteria";
  }

  if (
    query.includes("notice") ||
    query.includes("announcement")
  ) {
    return "notices";
  }

  if (
    query.includes("course") ||
    query.includes("subject") ||
    query.includes("class")
  ) {
    return "academics";
  }

  return "general";
}

module.exports = { detectService };