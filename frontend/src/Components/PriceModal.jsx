// PriceModal.jsx

function PriceModal({ price, setPrice, increasePrice, decreasePrice, modalId, title }) {
  const handlePriceInput = (event) => {
    const inputPrice = parseInt(event.target.value.replace(/\D/g, ''), 10);
    setPrice(isNaN(inputPrice) ? 0 : inputPrice);
  };

  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button" onClick={increasePrice}>+</button>
              <input type="text" className="form-control" placeholder="Enter Price" aria-label="Enter Price" value={`$ ${price}`} onChange={handlePriceInput}/>
              <button className="btn btn-outline-secondary" type="button" onClick={decreasePrice}>-</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceModal;