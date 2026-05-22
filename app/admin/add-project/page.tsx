"use client"

import { useState } from "react"

import { addDoc, collection } from "firebase/firestore"

import { db } from "../../../lib/firebase"

export default function AddProjectPage() {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [budget, setBudget] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const [loading, setLoading] = useState(false)

  async function handleAddProject() {

    if (
      !title ||
      !category ||
      !budget ||
      !image ||
      !description
    ) {
      alert("Fill all fields")
      return
    }

    try {

      setLoading(true)

      await addDoc(
        collection(db, "projects"),
        {
          title,
          category,
          budget,
          image,
          description,
          createdAt: Date.now(),
        }
      )

      alert("Project Added Successfully")

      setTitle("")
      setCategory("")
      setBudget("")
      setImage("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Error adding project")

    } finally {

      setLoading(false)

    }

  }

  return (

    <main className="min-h-screen bg-[#f8fafc] px-6 py-32">

      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-black mb-10">
          Add Project
        </h1>

        <div className="space-y-6">

          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Project Title"
            className="w-full border p-5 rounded-2xl"
          />

          <input
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            placeholder="Category"
            className="w-full border p-5 rounded-2xl"
          />

          <input
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
            placeholder="Budget"
            className="w-full border p-5 rounded-2xl"
          />

          <input
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            placeholder="Image URL"
            className="w-full border p-5 rounded-2xl"
          />

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Description"
            className="w-full border p-5 rounded-2xl"
          />

          <button
            onClick={handleAddProject}
            disabled={loading}
            className="bg-black text-white px-10 py-5 rounded-2xl"
          >
            {
              loading
                ? "Adding..."
                : "Add Project"
            }
          </button>

        </div>

      </div>

    </main>

  )

}