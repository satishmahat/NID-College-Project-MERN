import Form from "./formModel.js"; 

// Create a new form entry
export const postAForm = async (req, res) => {
    try {
        const newForm = new Form({...req.body});
        await newForm.save();
        res.status(201).json({ message: "Form created successfully", data: newForm });
    } catch (error) {
        res.status(500).json({ message: "Error creating form", error: error.message });
    }
};

// Get all form entries
export const getAllForm = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving forms", error: error.message });
    }
};

// Update a form entry by ID
export const updateForm = async (req, res) => {
    try {
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedForm) return res.status(404).json({ message: "Form not found" });
        
        res.status(200).json({ message: "Form updated successfully", data: updatedForm });
    } catch (error) {
        res.status(500).json({ message: "Error updating form", error: error.message });
    }
};

// Delete a form entry by ID
export const deleteAForm = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) return res.status(404).json({ message: "Form not found" });

        res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting form", error: error.message });
    }
};
