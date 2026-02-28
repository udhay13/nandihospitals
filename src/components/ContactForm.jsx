import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, Phone, Mail, MessageSquare, Calendar } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        department: '',
        date: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim() || !/^\+?[\d\s-]{10,}$/.test(formData.phone))
            newErrors.phone = 'Valid phone number required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.message.trim()) newErrors.message = 'Please enter your message';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg, #10B981, #00B8B8)' }}
                >
                    <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    Appointment Request Sent!
                </h3>
                <p className="text-gray-500 max-w-md">
                    Thank you, <strong>{formData.name}</strong>! Our team will contact you within 2 hours
                    to confirm your appointment.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', department: '', date: '', message: '' }); }}
                    className="mt-8 btn-outline text-sm px-6 py-2.5"
                >
                    Submit Another Request
                </button>
            </motion.div>
        );
    }

    const fields = [
        { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Your full name', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, placeholder: '+91 98765 43210', required: true },
        { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'your@email.com', required: true },
        { name: 'date', label: 'Preferred Date', type: 'date', icon: Calendar, placeholder: '', required: false },
    ];

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {fields.map((field) => {
                    const Icon = field.icon;
                    return (
                        <div key={field.name}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor={field.name}>
                                {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <div className="relative">
                                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-primary-500/30 ${errors[field.name]
                                            ? 'border-red-400 bg-red-50'
                                            : 'border-gray-200 bg-white hover:border-primary-300 focus:border-primary-500'
                                        }`}
                                />
                            </div>
                            {errors[field.name] && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-xs mt-1"
                                >
                                    {errors[field.name]}
                                </motion.p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Department Select */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="department">
                    Department
                </label>
                <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white hover:border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all duration-200"
                >
                    <option value="">Select a department</option>
                    <option>24×7 Emergency & Trauma Care</option>
                    <option>Neurosciences</option>
                    <option>Stroke Care & Early Intervention</option>
                    <option>Spine & Orthopaedic Care</option>
                    <option>Obstetrics & Gynaecology</option>
                    <option>Fertility & Reproductive Medicine</option>
                    <option>Advanced Diagnostics</option>
                    <option>Critical Care & Inpatient Services</option>
                </select>
            </div>

            {/* Message textarea */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Message / Symptoms <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your symptoms or reason for visit..."
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none resize-none focus:ring-2 focus:ring-primary-500/30 ${errors.message
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 bg-white hover:border-primary-300 focus:border-primary-500'
                            }`}
                    />
                </div>
                {errors.message && (
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.message}
                    </motion.p>
                )}
            </div>

            <motion.button
                type="submit"
                id="contact-form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full btn-primary py-4 text-base font-bold relative overflow-hidden"
            >
                {loading ? (
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending Request...
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Book Appointment
                    </div>
                )}
            </motion.button>
        </form>
    );
}
