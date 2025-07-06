interface SimpleHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SimpleHeader = ({ searchTerm, onSearchChange }: SimpleHeaderProps) => {
  return (
    <header style={{ 
      backgroundColor: 'white', 
      padding: '1rem', 
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
        Zava
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '0.5rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.375rem',
          width: '300px'
        }}
      />
      <div style={{ fontSize: '1rem' }}>Cart (0)</div>
    </header>
  );
};

export default SimpleHeader;
