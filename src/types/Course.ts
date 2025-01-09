export interface Course {
    id: number;
    title: string;
    description?: string;
    isPublished: boolean;
    creatorId: number;
}