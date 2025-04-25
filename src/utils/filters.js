export const applyFilters = (doctors, filters) => {
  let filtered = [...doctors];

  if (filters.name) {
    filtered = filtered.filter((doc) =>
      doc.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }

  if (filters.moc) {
    filtered = filtered.filter((doc) => {
      if (filters.moc === "in-clinic" && doc.in_clinic) {
        return true;
      } else if (filters.moc === "video" && doc.video_consult) {
        return true;
      } else if (filters.moc === "chat" && doc.chat) {
        return true;
      }
      return false;
    });
  }

  if (filters.speciality) {
    const specs = [].concat(filters.speciality);
    filtered = filtered.filter((doc) =>
      doc.specialities.some((s) => specs.includes(s.name))
    );
  }
  

  // Sorting based on filters
  if (filters.sort === "low-to-high") {
    filtered.sort((a, b) => {
      const feeA = parseInt(a.fees.replace("₹", "").trim(), 10);
      const feeB = parseInt(b.fees.replace("₹", "").trim(), 10);
      return feeA - feeB;
    });
  } else if (filters.sort === "high-to-low") {
    filtered.sort((a, b) => {
      const feeA = parseInt(a.fees.replace("₹", "").trim(), 10);
      const feeB = parseInt(b.fees.replace("₹", "").trim(), 10);
      return feeB - feeA;
    });
  } else if (filters.sort === "high-to-low-experience") {
    filtered.sort((a, b) => {
      const expA = parseInt(a.experience.split(" ")[0], 10);
      const expB = parseInt(b.experience.split(" ")[0], 10);
      return expB - expA;
    });
  }

  return filtered;
};
