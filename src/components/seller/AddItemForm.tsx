"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { NextPage } from "next";

const MAX_IMAGES = 5;
const MAX_FILE_SIZE_MB = 5;

const categories = [
  "Jewelry",
  "Watches",
  "Electronics",
  "Collectibles",
  "Art & Antiques",
  "Musical Instruments",
  "Tools",
  "Other",
];

const conditions = ["Excellent", "Very Good", "Good", "Fair", "Poor"];

const AddItemForm: NextPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    condition: "",
    description: "",
    price: "",
    images: [] as File[],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const validImages = Array.from(files).filter(
      (file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024
    );

    if (validImages.length + formData.images.length > MAX_IMAGES) {
      alert(`Maximum of ${MAX_IMAGES} images allowed.`);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...validImages].slice(0, MAX_IMAGES),
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // TODO: Submit to backend
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem 1rem", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "2rem", color: "#333" }}>
        Add New Item
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Basic Info */}
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Basic Information</legend>

          <label style={labelStyle}>
            Item Title <span style={{ color: "red" }}>*</span>
            <input
              type="text"
              required
              value={formData.title}
              placeholder="Enter item title"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={inputStyle}
            />
          </label>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <label style={{ ...labelStyle, flex: 1 }}>
              Category <span style={{ color: "red" }}>*</span>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={inputStyle}
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ ...labelStyle, flex: 1 }}>
              Condition <span style={{ color: "red" }}>*</span>
              <select
                required
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                style={inputStyle}
              >
                <option value="">Select Condition</option>
                {conditions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label style={{ ...labelStyle, marginTop: "1rem" }}>
            Description <span style={{ color: "red" }}>*</span>
            <textarea
              required
              rows={5}
              placeholder="Describe your item in detail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </label>
        </fieldset>

        {/* Pricing */}
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Pricing</legend>

          <label style={labelStyle}>
            Asking Price <span style={{ color: "red" }}>*</span>
            <input
              type="number"
              min={0}
              step="0.01"
              required
              placeholder="0.00"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              style={inputStyle}
            />
          </label>

          <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
            Set a fair price based on item condition and market value.
          </p>
        </fieldset>

        {/* Images */}
        <fieldset style={fieldsetStyle}>
          <legend style={legendStyle}>Images</legend>

          <div
            style={uploadBoxStyle}
            onClick={() => fileInputRef.current?.click()}
          >
            <p style={{ marginBottom: 6 }}>Click or tap to upload images</p>
            <p style={{ fontSize: "0.85rem", color: "#888" }}>
              Up to 5 images, each ≤ 5MB
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              hidden
            />
          </div>

          {formData.images.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "1rem" }}>
              {formData.images.map((img, i) => (
                <div key={i} style={{ position: "relative", width: 100, height: 100, borderRadius: 8, overflow: "hidden" }}>
                  <Image
                    src={URL.createObjectURL(img)}
                    alt={`Item image ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#ff4d4f",
                      color: "#fff",
                      border: "none",
                      fontWeight: "bold",
                      cursor: "pointer",
                      boxShadow: "0 0 2px rgba(0,0,0,0.3)",
                    }}
                    aria-label={`Remove image ${i + 1}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </fieldset>

        {/* Submit Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            type="submit"
            style={primaryButtonStyle}
          >
            Submit for Review
          </button>
          <button
            type="button"
            style={secondaryButtonStyle}
          >
            Save as Draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

// === Styles ===

const fieldsetStyle = {
  padding: "1.5rem",
  border: "1px solid #ddd",
  borderRadius: "10px",
  backgroundColor: "#fafafa",
};

const legendStyle = {
  fontWeight: 600,
  fontSize: "1.1rem",
  color: "#444",
  marginBottom: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: 500,
  fontSize: "0.95rem",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  marginTop: "6px",
  padding: "0.65rem",
  fontSize: "0.95rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
  outlineColor: "#0070f3",
};

const uploadBoxStyle = {
  border: "2px dashed #bbb",
  borderRadius: "8px",
  padding: "2rem",
  textAlign: "center" as const,
  cursor: "pointer",
  backgroundColor: "#fff",
  transition: "border-color 0.3s",
};

const primaryButtonStyle = {
  flex: 1,
  padding: "0.85rem",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const secondaryButtonStyle = {
  flex: 1,
  padding: "0.85rem",
  backgroundColor: "#fff",
  color: "#333",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontWeight: 500,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "border-color 0.3s",
};
