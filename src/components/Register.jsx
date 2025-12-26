import { useState } from "react"

function Register() {

  /* ===== Options as Arrays (JSON) ===== */
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" }
  ]

  const hobbiesList = [
    { label: "Music", value: "music" },
    { label: "Movies", value: "movies" },
    { label: "Plastic Model", value: "plastic model" }
  ]

  const roles = [
    { label: "General staff", value: "general staff" },
    { label: "Developer", value: "developer" },
    { label: "System Analyst", value: "system analyst" }
  ]

  /* ===== State ===== */
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [gender, setGender] = useState("")
  const [hobbies, setHobbies] = useState([])
  const [role, setRole] = useState("")

  /* ===== Checkbox Handler ===== */
  function onHobbiesToggle(event) {
    const value = event.target.value
    const checked = event.target.checked

    if (!checked) {
      setHobbies((prev) =>
        prev.filter((item) => item !== value)
      )
    } else {
      setHobbies((prev) => [...prev, value])
    }
  }

  return (
    <div style={{ background: "white", padding: "20px", width: "350px" }}>
      <h3>Registration Form</h3>

      {/* Username */}
      <p>
        <label>Username</label><br />
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </p>

      {/* Firstname */}
      <p>
        <label>Firstname</label><br />
        <input value={firstname} onChange={e => setFirstname(e.target.value)} />
      </p>

      {/* Lastname */}
      <p>
        <label>Lastname</label><br />
        <input value={lastname} onChange={e => setLastname(e.target.value)} />
      </p>

      {/* Gender */}
      <p><b>Gender</b></p>
      {genders.map((g) => (
        <p key={g.value}>
          <input
            type="radio"
            name="gender"
            value={g.value}
            onChange={e => setGender(e.target.value)}
          /> {g.label}
        </p>
      ))}

      {/* Hobbies */}
      <p><b>Hobbies</b></p>
      {hobbiesList.map((h) => (
        <p key={h.value}>
          <input
            type="checkbox"
            value={h.value}
            onChange={onHobbiesToggle}
          /> {h.label}
        </p>
      ))}

      {/* Role */}
      <p>
        <label>Role</label><br />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </p>

      <hr />

      {/* ===== Output Section ===== */}
      <p>Username: <span style={{ color: "brown" }}>{username}</span></p>
      <p>Firstname: <span style={{ color: "brown" }}>{firstname}</span></p>
      <p>Lastname: <span style={{ color: "brown" }}>{lastname}</span></p>
      <p>Gender: <span style={{ color: "brown" }}>{gender}</span></p>
      <p>Hobbies: <span style={{ color: "brown" }}>{hobbies.join(", ")}</span></p>
      <p>Role: <span style={{ color: "brown" }}>{role}</span></p>
    </div>
  )
}

export default Register
