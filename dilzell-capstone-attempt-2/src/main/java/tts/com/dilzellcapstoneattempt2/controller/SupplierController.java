package tts.com.dilzellcapstoneattempt2.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tts.com.dilzellcapstoneattempt2.exception.ResourceNotFoundException;
import tts.com.dilzellcapstoneattempt2.model.Supplier;
import tts.com.dilzellcapstoneattempt2.repository.SupplierRepository;

@CrossOrigin(origins = "http://localhost:4200")


@RestController
@RequestMapping("/api/v1")
public class SupplierController {
    //@Autowired
    private SupplierRepository supplierRepository;

    //controller here
    public SupplierController(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }


    @GetMapping("/suppliers")
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    @GetMapping("/suppliers/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable(value = "id") Long supplierId)
            throws ResourceNotFoundException {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found for this id :: " + supplierId));
        return ResponseEntity.ok().body(supplier);
    }

    @PostMapping("/suppliers")
    public Supplier createSupplier(@Valid @RequestBody Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @PutMapping("/suppliers/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable(value = "id") Long supplierId,
                                                   @Valid @RequestBody Supplier supplierDetails) throws ResourceNotFoundException {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found for this id :: " + supplierId));



               supplier.setName(supplier.getName()); // name
        final Supplier updatedSupplier = supplierRepository.save(supplier);
        return ResponseEntity.ok(updatedSupplier);
    }

    @DeleteMapping("/suppliers/{id}")
    public Map<String, Boolean> deleteSupplier(@PathVariable(value = "id") Long supplierId)
            throws ResourceNotFoundException {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found for this id :: " + supplierId));

        supplierRepository.delete(supplier);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}


