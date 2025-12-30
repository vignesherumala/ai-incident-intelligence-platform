import { useState } from "react";
import { createIncident } from "../api/incidentApi";
import { useNavigate } from "react-router-dom";

const CreateIncident = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    impact: "low",
    urgency: "low"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createIncident(form);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Incident</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Incident Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Incident Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <br /><br />

        <select name="impact" onChange={handleChange}>
          <option value="low">Low Impact</option>
          <option value="medium">Medium Impact</option>
          <option value="high">High Impact</option>
        </select>

        <select name="urgency" onChange={handleChange}>
          <option value="low">Low Urgency</option>
          <option value="medium">Medium Urgency</option>
          <option value="high">High Urgency</option>
        </select>

        <br /><br />
        <button type="submit">Create Incident</button>
      </form>
    </div>
  );
};

export default CreateIncident;
