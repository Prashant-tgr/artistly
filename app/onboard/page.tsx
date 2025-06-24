'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required')
});

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['Hindi', 'English', 'Tamil', 'Punjabi'];
const fees = ['< ₹10,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '> ₹50,000'];

export default function OnboardPage() {
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      fee: '',
      location: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', { ...data, image });
    alert('Submitted! Check console for output.');
    reset();
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">🎤 Artist Onboarding</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" {...register('name')} className="w-full border rounded px-3 py-2" />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 font-medium">Bio</label>
          <textarea {...register('bio')} rows={4} className="w-full border rounded px-3 py-2" />
          {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}
        </div>

        {/* Category (multi-select checkboxes) */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <div className="space-y-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input type="checkbox" value={cat} {...register('category')} />
                <span>{cat}</span>
              </label>
            ))}
          </div>
          {errors.category && <p className="text-sm text-red-600">{errors.category.message}</p>}
        </div>

        {/* Languages (multi-select checkboxes) */}
        <div>
          <label className="block mb-1 font-medium">Languages Spoken</label>
          <div className="space-y-1">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center space-x-2">
                <input type="checkbox" value={lang} {...register('languages')} />
                <span>{lang}</span>
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}
        </div>

        {/* Fee Range */}
        <div>
          <label className="block mb-1 font-medium">Fee Range</label>
          <select {...register('fee')} className="w-full border rounded px-3 py-2">
            <option value="">Select range</option>
            {fees.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          {errors.fee && <p className="text-sm text-red-600">{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input type="text" {...register('location')} className="w-full border rounded px-3 py-2" />
          {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Profile Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </main>
  );
}
