import { Subject } from "../types/index.js";

export const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Foundational concepts in programming, algorithms, and computational thinking using Python.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "MATH241",
        name: "Calculus III",
        department: "Mathematics",
        description: "Multivariable calculus covering partial derivatives, multiple integrals, and vector calculus.",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "CHEM110",
        name: "General Chemistry I",
        department: "Chemistry",
        description: "Principles of atomic structure, bonding, stoichiometry, thermochemistry, and periodic trends.",
        createdAt: new Date().toISOString()
    },
    {
        id: 4,
        code: "HIST205",
        name: "Modern World History",
        department: "History",
        description: "Survey of global political, social, and economic developments from the 18th century to present.",
        createdAt: new Date().toISOString()
    }
];