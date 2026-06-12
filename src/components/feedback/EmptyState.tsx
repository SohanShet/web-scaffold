type EmptyStateProps = {
    title: string;
    description?: string;
    action?: React.ReactNode;
};

export default function EmptyState({
    title,
    description,
    action,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            {description && (
                <p className="mt-2 text-muted-foreground">
                    {description}
                </p>
            )}

            {action && (
                <div className="mt-6">
                    {action}
                </div>
            )}
        </div>
    );
}



// Usage Examples:
// No Blogs
// <EmptyState
//     title="No Blogs Found"
//     description="There are currently no published articles."
// />
// No Search Results
// <EmptyState
//     title="No Results Found"
//     description="Try adjusting your search."
// />