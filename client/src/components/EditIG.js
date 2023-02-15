// import React, { useState, useEffect } from "react";

// function EditIG({ ig }) {
//   const [igName, setIgName] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [weekday, setWeekday] = useState(0);
//   const [time, setTime] = useState("");
//   const [isWeekly, setIsWeekly] = useState(true);
//   const [moderator, setModerator] = useState(0);
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   function handleEditIG(id) {
//     fetch(`/interest_groups/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: igName,
//         description,
//         location,
//         weekday,
//         time,
//         is_weekly: isWeekly,
//       }),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => console.error(error));
//   }

//   return (
//     <form onSubmit={handleEditIG}>
//       <p>Interest Group Name</p>
//       <input
//         type="text"
//         id="name"
//         autoComplete="off"
//         value={igName}
//         onChange={(e) => setIgName(e.target.value)}
//       />
//       <p>Description</p>
//       <textarea
//         type="text"
//         id="description"
//         autoComplete="off"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <p>Location</p>
//       <input
//         type="text"
//         id="location"
//         autoComplete="off"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <label>Weekday</label>
//       <select
//         id="weekday"
//         value={weekday}
//         onChange={(e) => setWeekday(parseInt(e.target.value))}
//       >
//         <option value="0">Monday</option>
//         <option value="1">Tuesday</option>
//         <option value="2">Wednesday</option>
//         <option value="3">Thursday</option>
//         <option value="4">Friday</option>
//         <option value="5">Saturday</option>
//         <option value="6">Sunday</option>
//       </select>
//       <p>Time</p>
//       <input
//         type="time"
//         id="time"
//         min="01:00"
//         max="11:00"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <label>Weekly?</label>
//       <select
//         id="is-weekly"
//         value={isWeekly}
//         onChange={(e) => setIsWeekly(e.target.value)}
//       >
//         <option value="true">Yes</option>
//         <option value="false">No</option>
//       </select>
//       <button type="submit">{isLoading ? "Loading..." : "Create"}</button>
//       {errors.map((err) => (
//         <p key={err}>{err}</p>
//       ))}
//     </form>
//   );
// }

// export default EditIG;
