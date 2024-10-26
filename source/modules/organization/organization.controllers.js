import organizationModel from "../../../DB/model/organization.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { asynchandler,AppError } from "../../utilits/asyncHandlers.js";




    export const createorganization = asynchandler(async (req, res, next) => {
        const organization = new organizationModel({ ...req.body });
        await organization.save();
        res.status(201).json(organization);
});
    export const getorganization = asynchandler(async (req, res, next) => {
        const { organization_Id,name ,describation } = req.body;
        if (organization_Id) query.organization_Id = organization_Id;
        const organizations = await organizationModel.find(req.body)
        res.json(organizations);
        if (req.user.role === 'admin') {
            res.json(organization);
          } else {
            // For read-only users, filter sensitive information
            const filteredOrganization = {
              id: organization.id,
              name: organization.name,
              // ... other public fields
            };
            res.json(filteredOrganization);
          }
});
    export const deleteorganization = asynchandler(async (req, res, next) => {
        const organization = await organizationModel.findByIdAndDelete(req.params.id);
        if (!organization) return res.sendStatus(404);
        res.sendStatus(204);
});
export const readorganization = asynchandler(async (req, res, next) => {
    const organizationId = req.params.organizationId;
  const organization = organizationModel.find(organizationId);
  if (!organization) {
    return res.status(404).json({ error: 'Organization not found' });
  }
  res.json(organization);
});
export const readAllorganization = asynchandler(async (req, res, next) => {
    const organizationId = req.params.organizationId;
    const organization =organizationModel.find(organizationId);
  
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    } 
    res.json(organization);
});
export const updateorganization = asynchandler(async (req, res, next) => {
    const organizationId = req.params.organizationId;
  const updatedOrganization = req.body;
  if (!updatedOrganization.name || !updatedOrganization.description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  organizationModel[organizationId] = {
    ...organizationModel[organizationId],
    ...updatedOrganization,
  };
  res.json({ message: 'Organization updated successfully' })
});
