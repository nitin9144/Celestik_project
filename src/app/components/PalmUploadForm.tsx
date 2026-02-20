import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { ZodiacBackground } from './ZodiacBackground';

interface FormData {
  fullName: string;
  gender: string;
  age: string;
  palmImage: File | null;
  imagePreview: string;
}

export function PalmUploadForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragOverlay = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gender: '',
    age: '',
    palmImage: null,
    imagePreview: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({
        ...prev,
        palmImage: 'Please select a valid image file',
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData(prev => ({
        ...prev,
        palmImage: file,
        imagePreview: e.target?.result as string,
      }));
      setErrors(prev => ({
        ...prev,
        palmImage: '',
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      palmImage: null,
      imagePreview: '',
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 18 || parseInt(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age (18-120)';
    }

    if (!formData.palmImage) {
      newErrors.palmImage = 'Palm image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Store form data in session/state for next page
      sessionStorage.setItem('palmFormData', JSON.stringify({
        fullName: formData.fullName,
        gender: formData.gender,
        age: formData.age,
        imagePreview: formData.imagePreview,
      }));

      navigate('/payment');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="border-2 border-purple-300/40 rounded-lg p-8 md:p-12 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <h1 className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
                REVEAL YOUR COSMIC TRUTH
              </h1>
              <div className="h-1 w-32 bg-amber-200/60 mx-auto mb-4" />
              <p className="text-purple-200 italic" style={{ fontFamily: 'var(--font-mystical)' }}>
                Let's begin your journey of self-discovery
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-amber-100/80 mb-2 text-sm tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a2555]/50 border border-purple-300/40 rounded text-amber-100 placeholder-purple-300/50 focus:border-amber-200/60 focus:outline-none focus:ring-1 focus:ring-amber-200/30 transition-all"
                    style={{ fontFamily: 'var(--font-elegant)' }}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-amber-100/80 mb-2 text-sm tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                    GENDER
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a2555]/50 border border-purple-300/40 rounded text-amber-100 focus:border-amber-200/60 focus:outline-none focus:ring-1 focus:ring-amber-200/30 transition-all"
                    style={{ fontFamily: 'var(--font-elegant)' }}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block text-amber-100/80 mb-2 text-sm tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                    AGE
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a2555]/50 border border-purple-300/40 rounded text-amber-100 placeholder-purple-300/50 focus:border-amber-200/60 focus:outline-none focus:ring-1 focus:ring-amber-200/30 transition-all"
                    style={{ fontFamily: 'var(--font-elegant)' }}
                    placeholder="Enter your age"
                    min="18"
                    max="120"
                  />
                  {errors.age && (
                    <p className="text-red-400 text-xs mt-1">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* Palm Image Upload */}
              <div>
                <label className="block text-amber-100/80 mb-2 text-sm tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                  PALM IMAGE
                </label>

                {!formData.imagePreview ? (
                  <div
                    ref={dragOverlay}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                      isDragging
                        ? 'border-amber-200 bg-amber-100/10'
                        : 'border-purple-300/40 hover:border-purple-300/60'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div className="flex flex-col items-center gap-3">
                      <Upload className="w-12 h-12 text-amber-200/60" />
                      <div>
                        <p className="text-amber-100/80" style={{ fontFamily: 'var(--font-elegant)' }}>
                          Drag and drop your palm image here
                        </p>
                        <p className="text-purple-300/60 text-sm mt-1" style={{ fontFamily: 'var(--font-elegant)' }}>
                          or click to browse
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleUploadClick}
                        className="mt-4 px-6 py-2 bg-amber-200/20 border border-amber-200/60 text-amber-100 rounded hover:bg-amber-200/30 transition-all"
                        style={{ fontFamily: 'var(--font-mystical)' }}
                      >
                        SELECT IMAGE
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative bg-[#1a2555]/50 border border-purple-300/40 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-32 h-32 rounded-lg overflow-hidden border border-amber-200/40">
                        <img
                          src={formData.imagePreview}
                          alt="Palm preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-amber-100/80" style={{ fontFamily: 'var(--font-elegant)' }}>
                          Image uploaded successfully
                        </p>
                        <p className="text-purple-300/60 text-sm mt-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                          Ready for cosmic analysis
                        </p>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/60 text-red-300 rounded hover:bg-red-500/30 transition-all text-sm"
                          style={{ fontFamily: 'var(--font-mystical)' }}
                        >
                          <X className="w-4 h-4" />
                          CHANGE IMAGE
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {errors.palmImage && (
                  <p className="text-red-400 text-xs mt-2">{errors.palmImage}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-100 text-[#0f1433] hover:from-amber-100 hover:to-amber-50 transition-all duration-300 rounded font-semibold tracking-wider hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] uppercase"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                Proceed to Payment
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate('/palmistry')}
                className="w-full px-8 py-3 bg-transparent border border-amber-100/40 text-amber-100 hover:bg-amber-100/10 transition-all duration-300 rounded tracking-wider uppercase text-sm"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                Back to Palmistry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
